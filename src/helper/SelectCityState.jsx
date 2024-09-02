import React, { useState, useCallback } from 'react';

export const SelectCityState = ({ onSave }) => {
  const [selectedStates, setSelectedStates] = useState([]);
  const [selectedCities, setSelectedCities] = useState({});
  const [expandedState, setExpandedState] = useState(null);

  const states = [
    { id: '1', name: 'Maharashtra' },
    { id: '2', name: 'Karnataka' },
    // Add more states as needed
  ];

  const citiesData = {
    '1': ['Mumbai', 'Pune', 'Nagpur'],
    '2': ['Bengaluru', 'Mysuru', 'Hubli'],
    // Add cities corresponding to each state
  };

  const handleStateChange = (event) => {
    const stateId = event.target.value;
    const isChecked = event.target.checked;

    setSelectedStates((prev) =>
      isChecked ? [...prev, stateId] : prev.filter((id) => id !== stateId)
    );

    if (isChecked) {
      setSelectedCities((prev) => ({
        ...prev,
        [stateId]: citiesData[stateId] || [],
      }));
    } else {
      setSelectedCities((prev) => {
        const newSelectedCities = { ...prev };
        delete newSelectedCities[stateId];
        return newSelectedCities;
      });
    }

    setExpandedState(prev => (prev === stateId ? null : stateId));
  };

  const handleCityChange = (stateId, cityName) => {
    setSelectedCities((prev) => {
      const newCities = prev[stateId]?.includes(cityName)
        ? prev[stateId].filter((city) => city !== cityName)
        : [...(prev[stateId] || []), cityName];

      if (newCities.length > 0 && !selectedStates.includes(stateId)) {
        setSelectedStates((prevStates) => [...prevStates, stateId]);
      }

      if (newCities.length === 0) {
        setSelectedStates((prevStates) => prevStates.filter((id) => id !== stateId));
      }

      return {
        ...prev,
        [stateId]: newCities,
      };
    });
  };

  const handleSelectAllCities = (stateId) => {
    const allCities = citiesData[stateId] || [];
    const allSelected = selectedCities[stateId]?.length === allCities.length;

    setSelectedCities((prev) => ({
      ...prev,
      [stateId]: allSelected ? [] : allCities,
    }));

    if (!allSelected) {
      setSelectedStates((prev) => [...prev, stateId]);
    } else {
      setSelectedStates((prev) => prev.filter((id) => id !== stateId));
    }
  };

  const handleSelectAllStates = (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedStates(states.map(state => state.id));
      setExpandedState(null);
      setSelectedCities(states.reduce((acc, state) => {
        acc[state.id] = citiesData[state.id] || [];
        return acc;
      }, {}));
    } else {
      setSelectedStates([]);
      setSelectedCities({});
    }
  };

  const handleSave = useCallback(() => {
    // const selectedCitiesNames = Object.keys(selectedCities).flatMap((stateId) =>
    //   selectedCities[stateId].map((city) => `${states.find((state) => state.id === stateId)?.name}: ${city}`)
    // );

    // console.log("Selected Cities and States:", selectedCitiesNames);

    const selectedCitiesNames = Object.values(selectedCities)
    .flat()
    .join(',');

  console.log("Selected Cities:", selectedCitiesNames);


    if (onSave) {
      onSave(selectedCitiesNames);
    }
  }, [selectedCities, states, onSave]);

  return (
    <div className="w-[270px] pt-[8%] mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Choose Your Operation Area</h2>
      <div className="space-y-4">
        <div className="text-left mb-[15px]">
          <div className="flex items-center mb-[15px]">
            <input
              type="checkbox"
              id="select-all-states"
              checked={selectedStates.length === states.length}
              onChange={handleSelectAllStates}
              className="mr-[5px]"
            />
            <label htmlFor="select-all-states" className="text-md">Select All States</label>
          </div>
          {states.map((state) => (
            <div key={state.id} className="mb-[15px]">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id={`state-${state.id}`}
                  checked={selectedStates.includes(state.id)}
                  onChange={handleStateChange}
                  value={state.id}
                  className="mr-[5px]"
                />
                <label htmlFor={`state-${state.id}`} className="text-md">{state.name}</label>
                <button
                  type="button"
                  onClick={() => setExpandedState(expandedState === state.id ? null : state.id)}
                  className="ml-auto bg-[#4CAF50] text-white px-2 py-1 rounded transition-all ease-in-out duration-300 cursor-pointer hover:bg-[#43A047]"
                >
                  {expandedState === state.id ? 'Hide Cities' : 'Show Cities'}
                </button>
              </div>
              {expandedState === state.id && (
                <div className="ml-6 mt-2 bg-[#f2f2f2] border border-gray-300 rounded-lg p-[15px] w-[200px]">
                  <div className="flex items-center mb-[10px]">
                    <input
                      type="checkbox"
                      id={`select-all-cities-${state.id}`}
                      checked={selectedCities[state.id]?.length === (citiesData[state.id]?.length || 0)}
                      onChange={() => handleSelectAllCities(state.id)}
                      className="mr-[5px]"
                    />
                    <label htmlFor={`select-all-cities-${state.id}`} className="text-md">Select All Cities</label>
                  </div>
                  {citiesData[state.id]?.map((city) => (
                    <div key={city} className="flex items-center mb-[5px]">
                      <input
                        type="checkbox"
                        id={`city-${state.id}-${city}`}
                        checked={selectedCities[state.id]?.includes(city) || false}
                        onChange={() => handleCityChange(state.id, city)}
                        className="mr-[5px]"
                      />
                      <label htmlFor={`city-${state.id}-${city}`} className="text-md">{city}</label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={handleSave}
          className="uppercase outline-none bg-[#4CAF50] w-full border-0 py-[15px] text-white text-[14px] transition-all ease-in-out duration-300 cursor-pointer hover:bg-[#43A047]"
        >
          Save
        </button>
      </div>
    </div>
  );
};
