import React, { useState, useCallback } from 'react';

const vehicleTypeData = [
  { key: "Champion", value: "Champion" },
  { key: "Tata Ace", value: "Tata Ace" },
  { key: "Pickup", value: "Pickup" },
  { key: "Tata 407", value: "Tata 407" },
  { key: "14 Ft Open / Container", value: "14 Ft Open / Container" },
  { key: "17 Ft Open / Container", value: "17 Ft Open / Container" },
  { key: "19 Ft Open / Container", value: "19 Ft Open / Container" },
  { key: "20 Ft Open", value: "20 Ft Open" },
  { key: "20 Ft Container", value: "20 Ft Container" },
  { key: "22 Ft Open", value: "22 Ft Open" },
  { key: "22 Ft Container", value: "22 Ft Container" },
  { key: "24 Ft Container", value: "24 Ft Container" },
  { key: "24 Ft Open", value: "24 Ft Open" },
  { key: "32 Ft XL Container", value: "32 Ft XL Container" },
  { key: "32 Ft XXL Container", value: "32 Ft XXL Container" },
  { key: "32 Ft XXXL Container", value: "32 Ft XXXL Container" },
  { key: "40 Ft Container", value: "40 Ft Container" },
  { key: "10 Tyre Open Truck", value: "10 Tyre Open Truck" },
  { key: "12 Tyre Open Truck", value: "12 Tyre Open Truck" },
  { key: "14 Tyre Open Truck", value: "14 Tyre Open Truck" },
  { key: "16 Tyre Open Truck", value: "16 Tyre Open Truck" },
  { key: "18 Tyre Open Truck", value: "18 Tyre Open Truck" },
  { key: "20 Tyre Open Truck", value: "20 Tyre Open Truck" },
  { key: "22 Tyre Open Truck", value: "22 Tyre Open Truck" },
  { key: "24 Tyre Open Truck", value: "24 Tyre Open Truck" },
  { key: "40 Ft Trailer Low Bed", value: "40 Ft Trailer Low Bed" },
  { key: "40 Ft Trailer High Bed", value: "40 Ft Trailer High Bed" },
  { key: "40 Ft Trailer Semi High Bed", value: "40 Ft Trailer Semi High Bed" },
];

const TruckTypeSelection = ({ onSave }) => {
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
    console.log("Selected Truck Types:", selectedTypes);
    if (onSave) {
      onSave(selectedTypes);
    }
  }, [selectedTypes, onSave]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-4 w-full max-w-lg mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Choose Truck Type</h2>
        <div className="grid grid-cols-1 md:pl-0 gap-4 mb-4">
          {vehicleTypeData.map((vehicle) => (
            <label key={vehicle.key} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={vehicle.value}
                checked={selectedTypes.includes(vehicle.value)}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
                aria-label={`Select ${vehicle.value}`}
              />
              <span className="text-gray-700">{vehicle.value}</span>
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

export default TruckTypeSelection;
