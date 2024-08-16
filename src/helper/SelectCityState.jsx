import React, { useState } from 'react';

export const SelectCityState = () => {
  const [selectedStates, setSelectedStates] = useState([]);
  const [selectedCities, setSelectedCities] = useState({});
  const [expandedState, setExpandedState] = useState(null); // To track which state's cities are expanded

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

    // Update selected states
    setSelectedStates((prev) =>
      isChecked
        ? [...prev, stateId]
        : prev.filter((id) => id !== stateId)
    );

    // Expand the selected state and collapse others
    setExpandedState(prev => (prev === stateId ? null : stateId));

    // Initialize or clear cities for the selected/unselected state
    setSelectedCities(prev => ({
      ...prev,
      ...(isChecked
        ? { [stateId]: citiesData[stateId] || [] }
        : { [stateId]: [] })
    }));
  };

  const handleCityChange = (stateId, cityName) => {
    setSelectedCities((prev) => ({
      ...prev,
      [stateId]: prev[stateId]?.includes(cityName)
        ? prev[stateId].filter((city) => city !== cityName)
        : [...(prev[stateId] || []), cityName],
    }));
  };

  const handleSelectAllStates = (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedStates(states.map(state => state.id));
      setExpandedState(null);

      // Initialize cities for all selected states
      setSelectedCities(states.reduce((acc, state) => {
        acc[state.id] = citiesData[state.id] || [];
        return acc;
      }, {}));
    } else {
      setSelectedStates([]);
      setSelectedCities({});
    }
  };

  const handleSelectAllCities = (stateId) => {
    const allCities = citiesData[stateId] || [];
    if (selectedCities[stateId]?.length === allCities.length) {
      // Deselect all cities
      setSelectedCities((prev) => ({
        ...prev,
        [stateId]: []
      }));
    } else {
      // Select all cities
      setSelectedCities((prev) => ({
        ...prev,
        [stateId]: allCities
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const selectedStatesNames = states
      .filter((state) => selectedStates.includes(state.id))
      .map((state) => state.name);

    const selectedCitiesNames = Object.keys(selectedCities).flatMap((stateId) =>
      selectedCities[stateId].map((city) => `${states.find((state) => state.id === stateId)?.name}: ${city}`)
    );

    const statesString = selectedStatesNames.join(',');
    const citiesString = selectedCitiesNames.join(',');

    console.log('Selected States:', statesString);
    console.log('Selected Cities:', citiesString);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Choose Your Operation Area</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* State Selection */}
        <div className="mb-4">
          <label htmlFor="states" className="block text-lg font-medium mb-2">Select States:</label>
          <div className="bg-gray-100 border border-gray-300 rounded-lg">
            <div className="flex items-center px-4 py-2 border-b border-gray-300">
              <input
                type="checkbox"
                id="select-all-states"
                checked={selectedStates.length === states.length}
                onChange={handleSelectAllStates}
                className="mr-2"
              />
              <label htmlFor="select-all-states" className="text-md">Select All States</label>
            </div>
            {states.map((state) => (
              <div key={state.id} className="flex items-center px-4 py-2 border-b border-gray-300">
                <input
                  type="checkbox"
                  id={`state-${state.id}`}
                  checked={selectedStates.includes(state.id)}
                  onChange={handleStateChange}
                  value={state.id}
                  className="mr-2"
                />
                <label htmlFor={`state-${state.id}`} className="text-md">{state.name}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Cities Selection */}
        {selectedStates.length > 0 && (
          selectedStates.map((stateId) => (
            <div key={stateId} className="mb-4">
              <div
                onClick={() => setExpandedState(expandedState === stateId ? null : stateId)}
                className="cursor-pointer flex items-center justify-between px-4 py-2 border border-gray-300 bg-gray-100 rounded-lg"
              >
                <h3 className="text-lg font-medium">{states.find(state => state.id === stateId)?.name} Cities:</h3>
                <span className="text-blue-500">
                  {expandedState === stateId ? 'Collapse' : 'Expand'}
                </span>
              </div>
              {expandedState === stateId && (
                <div className="bg-gray-100 border border-gray-300 rounded-lg mt-2">
                  <div className="flex items-center px-4 py-2 border-b border-gray-300">
                    <input
                      type="checkbox"
                      id={`select-all-cities-${stateId}`}
                      checked={selectedCities[stateId]?.length === (citiesData[stateId]?.length || 0)}
                      onChange={() => handleSelectAllCities(stateId)}
                      className="mr-2"
                    />
                    <label htmlFor={`select-all-cities-${stateId}`} className="text-md">Select All Cities</label>
                  </div>
                  {citiesData[stateId]?.map((city) => (
                    <div key={city} className="flex items-center px-4 py-2 border-b border-gray-300">
                      <input
                        type="checkbox"
                        id={`city-${stateId}-${city}`}
                        checked={selectedCities[stateId]?.includes(city) || false}
                        onChange={() => handleCityChange(stateId, city)}
                        className="mr-2"
                      />
                      <label htmlFor={`city-${stateId}-${city}`} className="text-md">{city}</label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};