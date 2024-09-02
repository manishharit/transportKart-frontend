import React, { useState } from 'react';
import { SelectCityState } from './SelectCityState';
import TruckTypeSelection from './VehicleTypeData';
import BusinessTypeSelection from './BusinessType';
import Loader from './Loader';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';

const RegistrationForm = ({baseUrl}) => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    contactNo: '',
    whatsAppNo: '',
    address: '',
    aboutUs: '',
    couponCode: '',
    established: '',
    numberOfEmployee: '',
    numberOfTrucks: '',
    vehicleType: '',
    serviceType: '',
    fromCity: '',
    toCity: '',
  });

  const [errors, setErrors] = useState({});
  const [isFromModalOpen, setIsFromModalOpen] = useState(false);
  const [isToModalOpen, setIsToModalOpen] = useState(false);
  const [isTruckTypeModalOpen, setIsTruckTypeModalOpen] = useState(false);
  const [isBusinessTypeModalOpen, setIsBusinessTypeModalOpen] = useState(false);

  const toggleFromModal = () => setIsFromModalOpen(!isFromModalOpen);
  const toggleToModal = () => setIsToModalOpen(!isToModalOpen);
  const toggleTruckTypeModal = () => setIsTruckTypeModalOpen(!isTruckTypeModalOpen);
  const toggleBusinessTypeModal = () => setIsBusinessTypeModalOpen(!isBusinessTypeModalOpen);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Allow only digits for mobileNo and whatsappNo
    if (name === 'contactNo' || name === 'whatsAppNo') {
      if (/^\d*$/.test(value)) {
        setFormData({ ...formData, [name]: value });

        // Real-time validation for 10 digits
        if (value.length !== 10 && value.length > 0) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: 'Phone number must be exactly 10 digits',
          }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
        }
      }
    } else {
      setFormData({ ...formData, [name]: value });
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  const handleTruckTypeSave = (selectedTypes) => {
    setFormData((prevData) => ({
      ...prevData,
      vehicleType: selectedTypes,
    }));
    toggleTruckTypeModal();
  };

  const handleBusinessTypeSave = (selectedTypes) => {
    setFormData((prevData) => ({
      ...prevData,
      serviceType: selectedTypes,
    }));
    toggleBusinessTypeModal();
  };

  const handleLocationSave = (location, type) => {
    setFormData((prevData) => ({
      ...prevData,
      [`${type}City`]: location,
    }));
    type === 'from' ? toggleFromModal() : toggleToModal();
  };

  const validateForm = () => {
    const formErrors = {};

    if (!formData.companyName) formErrors.companyName = 'Company Name is required';
    if (!formData.contactName) formErrors.contactName = 'Owner Name is required';

    if (!formData.contactNo) {
      formErrors.contactNo = 'Mobile No is required';
    } else if (formData.contactNo.length !== 10) {
      formErrors.contactNo = 'Mobile No must be exactly 10 digits';
    }

    if (!formData.whatsAppNo) {
      formErrors.whatsAppNo = 'WhatsApp No is required';
    } else if (formData.whatsAppNo.length !== 10) {
      formErrors.whatsAppNo = 'WhatsApp No must be exactly 10 digits';
    }

    if (!formData.address) formErrors.address = 'Address is required';
    if (!formData.aboutUs) formErrors.aboutUs = 'About is required';
    if (!formData.established) formErrors.established = 'Establishment Date is required';
    if (!formData.numberOfEmployee) formErrors.numberOfEmployee = 'Number of Team Members is required';
    if (!formData.numberOfTrucks) formErrors.numberOfTrucks = 'Number of Trucks is required';

    // forms validations
    if (!formData.fromCity) formErrors.fromCity = "Fill From Locations!";
    if (!formData.toCity) formErrors.toCity = "Fill To Locations!";
    if (formData.vehicleType.length === 0) formErrors.vehicleType = "Fill TruckType!";
    if (formData.serviceType.length === 0) formErrors.serviceType = "Fill BusinessType!";

    return formErrors;
  };
  

  // payment starting 

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

// payment ending


  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form Data Submitted:', formData);
      setErrors({});
      // Reset form if needed
      // setFormData({...initialFormData});

      // starting
      setLoading(true)
      try {
        const resp = await axios.post(`${baseUrl}/user/create`,formData)
        sessionStorage.setItem('userData', JSON.stringify(resp.data));
        console.log(resp)
        setLoading(false)
      } catch (error) {
        console.log(error)
        alert("Error !")
        setLoading(false)
        return
      }


      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }
      
      try {
        const userDatafromSession = sessionStorage.getItem('userData');
      const userRespfromSession = JSON.parse(userDatafromSession);
      console.log(userRespfromSession.companyName)
        const request = {
          amount:3100,
          companyName:userRespfromSession.companyName
        }
        const response = await axios.post(`${baseUrl}/user/api/payment/create_order`,request)

        const amount = response.data.amount;
        if(response.data.status === 'created'){
                const options = {
  
                  key: "rzp_live_Ivx0RsduJhbON5",
                  amount: amount/100,
                  currency: response.data.currency,
                  name: "TransportKart",
                  description: "TransportKart Business Membership",
                  // image: heroBanner,
                  order_id: response.data.id,
                  handler: async function (response) {
                    setLoading(true)
                    sessionStorage.setItem("id",response.razorpay_payment_id)
                    alert("We are processing your data do not refresh or reload page take screenshot your paymentId is :"+ response.razorpay_payment_id)

                    try {
                      const userData = sessionStorage.getItem('userData');
                      const userResp = JSON.parse(userData);
                        const statusresponse = await axios.post(`${baseUrl}/user/api/payment/update/status/${response.razorpay_payment_id}/company`,userResp);
                        alert('Account has been created and active now !')
                        setLoading(false)
                        navigate(`/user/${userResp.companyName}`)
                    } catch (error) {
                      alert("process has failed contact on email with your payment id")
                      setLoading(false)
                        console.error("Error while making profile active:", error);
                    }
                  },
                  prefill: {
                    name: "",
                    email: "",
                    contact: ""
                  },
                  notes: {
                    address: response.data.notes.gameId
                  },
                  theme: {
                    color: "#3399cc"
                  }
                };
      
                const rzp1 = new window.Razorpay(options);
                rzp1.on('payment.failed', function (response) {
                  alert("Payment has failed any deduction from bank will we refelect back in 2-3 days")
                });
                rzp1.open();
              }
        else if(response.status ==200){
          alert(response.data)
        }    
        // setLoading(false)
    } catch (error) {
      alert("payment failed")
      setLoading(false)
        console.error(error);
    }
    setLoading(false)
      // ending


    }
  };

  return (<>
  <NavBar/>
  {loading?<Loader/>:null }
    <div className="w-[360px] pt-[8%] mx-auto">
      <div className="relative z-10 bg-white max-w-[360px] mx-auto mb-[100px] p-[45px] text-center shadow-md">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            placeholder="Company Name"
            className="outline-none bg-[#f2f2f2] w-full border-0 mb-4 p-3 text-sm"
            required
          />
          {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName}</p>}

          <input
            type="text"
            name="contactName"
            value={formData.contactName}
            onChange={handleInputChange}
            placeholder="Owner Name"
            className="outline-none bg-[#f2f2f2] w-full border-0 mb-4 p-3 text-sm"
            required
          />
          {errors.contactName && <p className="text-red-500 text-sm">{errors.contactName}</p>}

          <input
            type="text"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleInputChange}
            placeholder="Mobile No"
            maxLength={10}
            className="outline-none bg-[#f2f2f2] w-full border-0 mb-4 p-3 text-sm"
            required
          />
          {errors.contactNo && <p className="text-red-500 text-sm">{errors.contactNo}</p>}

          <input
            type="text"
            name="whatsAppNo"
            value={formData.whatsAppNo}
            onChange={handleInputChange}
            placeholder="WhatsApp No"
            maxLength={10}
            className="outline-none bg-[#f2f2f2] w-full border-0 mb-4 p-3 text-sm"
            required
          />
          {errors.whatsAppNo && <p className="text-red-500 text-sm">{errors.whatsAppNo}</p>}

          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Address"
            className="outline-none bg-[#f2f2f2] w-full border-0 mb-4 p-3 text-sm"
            required
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}

          <input
            type="number"
            name="established"
            value={formData.established}
            onChange={handleInputChange}
            placeholder="Company Establishment Year"
            className="outline-none bg-[#f2f2f2] w-full border-0 mb-4 p-3 text-sm"
            required
          />
          {errors.established && <p className="text-red-500 text-sm">{errors.established}</p>}

          <input
            type="number"
            name="numberOfEmployee"
            value={formData.numberOfEmployee}
            onChange={handleInputChange}
            placeholder="Number of Team Members"
            className="outline-none bg-[#f2f2f2] w-full border-0 mb-4 p-3 text-sm"
            required
          />
          {errors.numberOfEmployee && <p className="text-red-500 text-sm">{errors.numberOfEmployee}</p>}

          <input
            type="number"
            name="numberOfTrucks"
            value={formData.numberOfTrucks}
            onChange={handleInputChange}
            placeholder="Number of Trucks"
            className="outline-none bg-[#f2f2f2] w-full border-0 mb-2 p-3 text-sm"
            required
          />
          {errors.numberOfTrucks && <p className="text-red-500 text-sm">{errors.numberOfTrucks}</p>}

          <button
              type="button"
              onClick={toggleFromModal}
              className="uppercase bg-[#4CAF50] w-full py-3 text-white text-sm hover:bg-[#43A047] mt-2"
            >
              From: Select City/State
            </button>
            {errors.fromCity && <p className="text-red-500 text-sm">{errors.fromCity}</p>}
            
            {isFromModalOpen && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                onClick={toggleFromModal}  // This will close the modal if the user clicks outside
              >
                <div
                  className="relative bg-white p-6 w-full max-w-md mx-auto rounded"
                  onClick={(e) => e.stopPropagation()}  // Prevents the modal from closing when clicking inside it
                >
                {/* Close button */}
                <button
                  onClick={toggleFromModal}
                  className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                >
                  ✖
                </button>
          
                <SelectCityState onSave={(location) => handleLocationSave(location, 'from')} onClose={toggleFromModal} />
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={toggleToModal}
            className="uppercase bg-[#4CAF50] w-full py-3 text-white text-sm hover:bg-[#43A047] mt-2"
          >
            To: Select City/State
          </button>
          {errors.toCity && <p className="text-red-500 text-sm">{errors.toCity}</p>}
          
          {isToModalOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
              onClick={toggleToModal}  // This will close the modal if the user clicks outside
            >
              <div
                className="relative bg-white p-6 w-full max-w-md mx-auto rounded"
                onClick={(e) => e.stopPropagation()}  // Prevents closing when clicking inside the modal
              >
                {/* Close button */}
                <button
                  onClick={toggleToModal}
                  className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                >
                  ✖
                </button>
          
                <SelectCityState onSave={(location) => handleLocationSave(location, 'to')} onClose={toggleToModal} />
              </div>
            </div>
          )}

            <button
              type="button"
              onClick={toggleTruckTypeModal}
              className="uppercase bg-[#4CAF50] w-full py-3 text-white text-sm hover:bg-[#43A047] mt-2"
            >
              Select Truck Type
            </button>
            {errors.vehicleType && <p className="text-red-500 text-sm">{errors.vehicleType}</p>}
            
            {isTruckTypeModalOpen && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                onClick={toggleTruckTypeModal}  // This will close the modal if the user clicks outside
              >
                <div
                  className="relative bg-white p-6 w-full max-w-md mx-auto rounded overflow-y-auto max-h-[80vh]"
                  onClick={(e) => e.stopPropagation()}  // Prevents closing when clicking inside the modal
                >
                  {/* Close button */}
                  <button
                    onClick={toggleTruckTypeModal}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                  >
                    ✖
                  </button>
            
                  <TruckTypeSelection onSave={handleTruckTypeSave} onClose={toggleTruckTypeModal} />
                </div>
              </div>
            )}

          <button
            type="button"
            onClick={toggleBusinessTypeModal}
            className="uppercase bg-[#4CAF50] w-full py-3 text-white text-sm hover:bg-[#43A047] mt-2"
          >
            Select Business Type
          </button>
          {errors.serviceType && <p className="text-red-500 text-sm">{errors.serviceType}</p>}
          
          {isBusinessTypeModalOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
              onClick={toggleBusinessTypeModal}  // Closes the modal if the user clicks outside
            >
              <div
                className="relative bg-white p-6 w-full max-w-md mx-auto rounded"
                onClick={(e) => e.stopPropagation()}  // Prevents closing when clicking inside the modal
              >
                {/* Close button */}
                <button
                  onClick={toggleBusinessTypeModal}
                  className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                >
                  ✖
                </button>
          
                <BusinessTypeSelection onSave={handleBusinessTypeSave} onClose={toggleBusinessTypeModal} />
              </div>
            </div>
          )}

          <input
            type="text"
            name="aboutUs"
            value={formData.aboutUs}
            onChange={handleInputChange}
            placeholder="About Company"
            className="outline-none bg-[#f2f2f2] w-full h-[100px] border-0 mt-4 p-3 text-sm"
            required
          />
          {errors.aboutUs && <p className="text-red-500 text-sm">{errors.aboutUs}</p>}

          <input
            name="couponCode"
            value={formData.couponCode}
            onChange={handleInputChange}
            placeholder="Coupon Code"
            className="outline-none bg-[#f2f2f2] w-full border-0 mb-4 p-3 text-sm mt-2"
          />



          <button
            type="submit"
            className="uppercase bg-[#4CAF50] w-full py-3 text-white text-sm hover:bg-[#43A047] mt-4"
          >
            Register
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default RegistrationForm;
