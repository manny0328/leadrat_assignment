import React, { useState } from 'react';

const Seat = ({ id, isBooked, onSelect }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    if (!isBooked) {
      setIsSelected(!isSelected);
      onSelect(id);
    }
  };

  const seatStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    backgroundColor: isBooked ? 'grey' : isSelected ? 'green' : 'white',
    border: '1px solid black',
    margin: '5px',
    cursor: isBooked ? 'not-allowed' : 'pointer',
  };

  return (
    <div style={seatStyle} onClick={handleClick}>
      <span style={{ fontSize: '12px' }}>{id}</span>
    </div>
  );
};

export default Seat;
