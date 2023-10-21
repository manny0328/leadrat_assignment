import React, { useState } from 'react';

const SeatSelector = ({ seatTypes }) => {
  const [selectedType, setSelectedType] = useState('Standard');
  const [selectedSeats, setSelectedSeats] = useState([]);

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
      <p>Selected Seats: {selectedSeats.length}</p>
    </div>
  );
};

export default SeatSelector;
