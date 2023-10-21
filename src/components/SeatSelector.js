// SeatSelector.js
import React, { useState } from 'react';

const SeatSelector = ({ seatTypes }) => {
  const [selectedType, setSelectedType] = useState('Standard');

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  return (
    <div style={{ margin: '20px', borderBottom: '1px solid black' }}>
      <label htmlFor="seatType">Select Seat Type:</label>
      <select id="seatType" value={selectedType} onChange={handleTypeChange}>
        {seatTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SeatSelector;
