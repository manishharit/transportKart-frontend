import React, { useState } from 'react';
import { SelectCityState } from './SelectCityState';
import TruckTypeSelection from './VehicleTypeData';
import BusinessTypeSelection from './BusinessType';  // Import your BusinessTypeSelection component

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    ownerName: '',
    mobileNo: '',
    email: '',
    whatsappNo: '',
    address: '',
    panNo: '',
    establishmentDate: '',
    teamMembers: '',
    truckTypes: [],
    businessTypes: [], // Add businessTypes to formData
    fromLocation: '',
    toLocation: '',
  });

  const [errors, setErrors] = useState({});
  const [isFromModalOpen, setIsFromModalOpen] = useState(false);
  const [isToModalOpen, setIsToModalOpen] = useState(false);
  const [isTruckTypeModalOpen, setIsTruckTypeModalOpen] = useState(false);
  const [isBusinessTypeModalOpen, setIsBusinessTypeModalOpen] = useState(false); // Add state for BusinessType modal

  const toggleFromModal = () => setIsFromModalOpen(!isFromModalOpen);
  const toggleToModal = () => setIsToModalOpen(!isToModalOpen);
  const toggleTruckTypeModal = () => setIsTruckTypeModalOpen(!isTruckTypeModalOpen);
  const toggleBusinessTypeModal = () => setIsBusinessTypeModalOpen(!isBusinessTypeModalOpen); // Toggle BusinessType modal

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTruckTypeSave = (selectedTypes) => {
    setFormData((prevData) => ({
      ...prevData,
      truckTypes: selectedTypes,
    }));
    toggleTruckTypeModal();
  };

  const handleBusinessTypeSave = (selectedTypes) => { // Add handler for BusinessType save
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
    let formErrors = {};
    if (!formData.companyName) formErrors.companyName = "Company Name is required";
    if (!formData.ownerName) formErrors.ownerName = "Owner Name is required";
    if (!formData.mobileNo) formErrors.mobileNo = "Mobile No is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.whatsappNo) formErrors.whatsappNo = "WhatsApp No is required";
    if (!formData.address) formErrors.address = "Address is required";
    if (!formData.panNo) formErrors.panNo = "PAN No is required";
    if (!formData.establishmentDate) formErrors.establishmentDate = "Establishment Date is required";
    if (!formData.teamMembers) formErrors.teamMembers = "Number of Team Members is required";
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
    }
  };

  return (
    <div className="w-[360px] pt-[8%] mx-auto">
      <div className="relative z-10 bg-white max-w-[360px] mx-auto mb-[100px] p-[45px] text-center shadow-[0_0_20px_0_rgba(0,0,0,0.2),0_5px_5px_0_rgba(0,0,0,0.24)]">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            placeholder="Company Name"
            className="outline-none bg-[#f2f2f2] w-full border-0 mb-[15px] p-[15px] box-border text-[14px]"
            required
          />
          {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName}</p>}

          <input
            type="text"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleInputChange}
            placeholder="Owner Name"
            className="outline-none bg-[#f2f2f2] w-full border-0 mb-[15px] p-[15px] box-border text-[14px]"
            required
          />
          {errors.ownerName && <p className="text-red-500 text-sm">{errors.ownerName}</p>}

          <input
            type="tel"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleInputChange}
            placeholder="Mobile No"
            className="outline-none bg-[#f2f2f2] w-full border-0 mb-[15px] p-[15px] box-border text-[14px]"
            required
          />
          {errors.mobileNo && <p className="text-red-500 text-sm">{errors.mobileNo}</p>}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="outline-none bg-[#f2f2f2] w-full border-0 mb-[15px] p-[15px] box-border text-[14px]"
            required
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <input
            type="tel"
            name="whatsappNo"
            value={formData.whatsappNo}
            onChange={handleInputChange}
            placeholder="WhatsApp No"
            className="outline-none bg-[#f2f2f2] w-full border-0 mb-[15px] p-[15px] box-border text-[14px]"
            required
          />
          {errors.whatsappNo && <p className="text-red-500 text-sm">{errors.whatsappNo}</p>}

          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Address"
            className="outline-none bg-[#f2f2f2] w-full border-0 mb-[15px] p-[15px] box-border text-[14px]"
            required
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}

          <input
            type="text"
            name="panNo"
            value={formData.panNo}
            onChange={handleInputChange}
            placeholder="PAN No"
            className="outline-none bg-[#f2f2f2] w-full border-0 mb-[15px] p-[15px] box-border text-[14px]"
            required
          />
          {errors.panNo && <p className="text-red-500 text-sm">{errors.panNo}</p>}

          <input
            type="date"
            name="establishmentDate"
            value={formData.establishmentDate}
            onChange={handleInputChange}
            placeholder="Company Establishment"
            className="outline-none bg-[#f2f2f2] w-full border-0 mb-[15px] p-[15px] box-border text-[14px]"
            required
          />
          {errors.establishmentDate && <p className="text-red-500 text-sm">{errors.establishmentDate}</p>}

          <input
            type="text"
            name="teamMembers"
            value={formData.teamMembers}
            onChange={handleInputChange}
            placeholder="Number of Team Members"
            className="outline-none bg-[#f2f2f2] w-full border-0 mb-[15px] p-[15px] box-border text-[14px]"
            required
          />
          {errors.teamMembers && <p className="text-red-500 text-sm">{errors.teamMembers}</p>}

          <button
            type="button"
            onClick={toggleFromModal}
            className="uppercase outline-none bg-[#4CAF50] w-full border-0 py-[15px] text-white text-[14px] transition-all ease-in-out duration-300 cursor-pointer hover:bg-[#43A047] mt-[15px]"
          >
            From: Select City/State
          </button>

          {isFromModalOpen && (
            <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50 pt-[10%]">
              <div className="relative bg-white p-6 w-[80%] max-w-md mx-auto rounded">
                <SelectCityState onSave={(location) => handleLocationSave(location, 'from')} onClose={toggleFromModal} />
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={toggleToModal}
            className="uppercase outline-none bg-[#4CAF50] w-full border-0 py-[15px] text-white text-[14px] transition-all ease-in-out duration-300 cursor-pointer hover:bg-[#43A047] mt-[15px]"
          >
            To: Select City/State
          </button>

          {isToModalOpen && (
            <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50 pt-[10%]">
              <div className="relative bg-white p-6 w-[80%] max-w-md mx-auto rounded">
                <SelectCityState onSave={(location) => handleLocationSave(location, 'to')} onClose={toggleToModal} />
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={toggleTruckTypeModal}
            className="uppercase outline-none bg-[#4CAF50] w-full border-0 py-[15px] text-white text-[14px] transition-all ease-in-out duration-300 cursor-pointer hover:bg-[#43A047] mt-[15px]"
          >
            Select Truck Type
          </button>

          {isTruckTypeModalOpen && (
            <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50 pt-[10%]">
              <div className="relative bg-white p-6 w-[80%] max-w-md mx-auto rounded overflow-y-auto max-h-[80vh]">
                <TruckTypeSelection onSave={handleTruckTypeSave} onClose={toggleTruckTypeModal} />
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={toggleBusinessTypeModal}
            className="uppercase outline-none bg-[#4CAF50] w-full border-0 py-[15px] text-white text-[14px] transition-all ease-in-out duration-300 cursor-pointer hover:bg-[#43A047] mt-[15px]"
          >
            Select Business Type
          </button>

          {isBusinessTypeModalOpen && (
            <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50 top-0">
            <div className="relative bg-white p-6 w-[80%] max-w-md mx-auto rounded">
              <BusinessTypeSelection onSave={handleBusinessTypeSave} onClose={toggleBusinessTypeModal} />
            </div>
          </div>
          )}

          <button
            type="submit"
            className="uppercase outline-none bg-[#4CAF50] w-full border-0 py-[15px] text-white text-[14px] transition-all ease-in-out duration-300 cursor-pointer hover:bg-[#43A047] mt-[15px]"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
