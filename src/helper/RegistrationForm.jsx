import React, { useState } from 'react';
import { SelectCityState } from './SelectCityState';
import TruckTypeSelection from './VehicleTypeData';
import BusinessTypeSelection from './BusinessType';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    mobileNo: '',
    whatsappNo: '',
    address: '',
    about: '',
    panNo: '',
    establishmentDate: '',
    numberOfEmployee: '',
    numberOfTrucks: '',
    truckTypes: [],
    businessTypes: [],
    fromLocation: '',
    toLocation: '',
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
    if (name === 'mobileNo' || name === 'whatsappNo') {
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
      truckTypes: selectedTypes,
    }));
    toggleTruckTypeModal();
  };

  const handleBusinessTypeSave = (selectedTypes) => {
    setFormData((prevData) => ({
      ...prevData,
      businessTypes: selectedTypes,
    }));
    toggleBusinessTypeModal();
  };

  const handleLocationSave = (location, type) => {
    setFormData((prevData) => ({
      ...prevData,
      [`${type}Location`]: location,
    }));
    type === 'from' ? toggleFromModal() : toggleToModal();
  };

  const validateForm = () => {
    const formErrors = {};

    if (!formData.companyName) formErrors.companyName = 'Company Name is required';
    if (!formData.contactName) formErrors.contactName = 'Owner Name is required';

    if (!formData.mobileNo) {
      formErrors.mobileNo = 'Mobile No is required';
    } else if (formData.mobileNo.length !== 10) {
      formErrors.mobileNo = 'Mobile No must be exactly 10 digits';
    }

    if (!formData.whatsappNo) {
      formErrors.whatsappNo = 'WhatsApp No is required';
    } else if (formData.whatsappNo.length !== 10) {
      formErrors.whatsappNo = 'WhatsApp No must be exactly 10 digits';
    }

    if (!formData.address) formErrors.address = 'Address is required';
    if (!formData.about) formErrors.about = 'About is required';
    if (!formData.panNo) formErrors.panNo = 'PAN No is required';
    if (!formData.establishmentDate) formErrors.establishmentDate = 'Establishment Date is required';
    if (!formData.numberOfEmployee) formErrors.numberOfEmployee = 'Number of Team Members is required';
    if (!formData.numberOfTrucks) formErrors.numberOfTrucks = 'Number of Trucks is required';

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form Data Submitted:', formData);
      setErrors({});
      // Reset form if needed
      // setFormData({...initialFormData});
    }
  };

  return (
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
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleInputChange}
            placeholder="Mobile No"
            maxLength={10}
            className="outline-none bg-[#f2f2f2] w-full border-0 mb-4 p-3 text-sm"
            required
          />
          {errors.mobileNo && <p className="text-red-500 text-sm">{errors.mobileNo}</p>}

          <input
            type="text"
            name="whatsappNo"
            value={formData.whatsappNo}
            onChange={handleInputChange}
            placeholder="WhatsApp No"
            maxLength={10}
            className="outline-none bg-[#f2f2f2] w-full border-0 mb-4 p-3 text-sm"
            required
          />
          {errors.whatsappNo && <p className="text-red-500 text-sm">{errors.whatsappNo}</p>}

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
            type="text"
            name="panNo"
            value={formData.panNo}
            onChange={handleInputChange}
            placeholder="PAN No"
            className="outline-none bg-[#f2f2f2] w-full border-0 mb-4 p-3 text-sm"
            required
          />
          {errors.panNo && <p className="text-red-500 text-sm">{errors.panNo}</p>}

          <input
            type="number"
            name="establishmentDate"
            value={formData.establishmentDate}
            onChange={handleInputChange}
            placeholder="Company Establishment Year"
            className="outline-none bg-[#f2f2f2] w-full border-0 mb-4 p-3 text-sm"
            required
          />
          {errors.establishmentDate && <p className="text-red-500 text-sm">{errors.establishmentDate}</p>}

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

          {isFromModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="relative bg-white p-6 w-full max-w-md mx-auto rounded">
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

          {isToModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="relative bg-white p-6 w-full max-w-md mx-auto rounded">
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

          {isTruckTypeModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="relative bg-white p-6 w-full max-w-md mx-auto rounded overflow-y-auto max-h-[80vh]">
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

          {isBusinessTypeModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="relative bg-white p-6 w-full max-w-md mx-auto rounded">
                <BusinessTypeSelection onSave={handleBusinessTypeSave} onClose={toggleBusinessTypeModal} />
              </div>
            </div>
          )}

          <input
            type="text"
            name="about"
            value={formData.about}
            onChange={handleInputChange}
            placeholder="About Company"
            className="outline-none bg-[#f2f2f2] w-full h-[100px] border-0 mt-4 p-3 text-sm"
            required
          />
          {errors.about && <p className="text-red-500 text-sm">{errors.about}</p>}


          <button
            type="submit"
            className="uppercase bg-[#4CAF50] w-full py-3 text-white text-sm hover:bg-[#43A047] mt-4"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
