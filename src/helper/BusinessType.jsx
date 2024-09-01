import React, { useState, useCallback } from 'react';

const serviceTypeData = [
  { key: "TRUCKOWNER", value: "TRUCKOWNER" },
  { key: "BROKER", value: "BROKER" },
  { key: "FULLLOAD", value: "FULLLOAD" },
  { key: "PARTLOAD", value: "PARTLOAD" },
  { key: "WAREHOUSE", value: "WAREHOUSE" },
  { key: "FRIEGHTFORWARDING", value: "FRIEGHTFORWARDING" },
  { key: "PACKERS & MOVERS", value: "PACKERS & MOVERS" }
];

const BusinessTypeSelection = ({ onSave }) => {
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleCheckboxChange = useCallback((event) => {
    const { value, checked } = event.target;
    setSelectedTypes((prevTypes) => 
      checked 
        ? [...prevTypes, value] 
        : prevTypes.filter((type) => type !== value)
    );
  }, []);

  const handleSave = useCallback(() => {
    console.log("Selected Business Types:", selectedTypes);
    if (onSave) {
      onSave(selectedTypes);
    }
  }, [selectedTypes, onSave]);

  return (
    <div className="flex justify-center items-center min-h-96 md:h-auto h-24">
      <div className="p-4 w-full max-w-lg mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Choose Business Type</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 pl-12 md:pl-0 gap-4 mb-4">
          {serviceTypeData.map((service) => (
            <label key={service.key} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={service.value}
                checked={selectedTypes.includes(service.value)}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
                aria-label={`Select ${service.value}`}
              />
              <span className="text-gray-700">{service.value}</span>
            </label>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleSave}
            className="bg-[#4CAF50] text-white py-2 px-6 rounded hover:bg-[#43A047] transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessTypeSelection;
