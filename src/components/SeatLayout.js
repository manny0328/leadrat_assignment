import React from 'react';
import Seat from './Seat';

const SeatLayout = ({ seats, seatClicked }) => {
  const rows = 15;
  const columns = 40;

  const generateSeats = (rowIndex) => {
    const row = [];
    const totalColumns = rowIndex === 0 ? 30 : columns;
    for (let i = 0; i < totalColumns; i++) {
      if (i > 0 && i % 10 === 0) {
        row.push(<span key={i}>&emsp;&emsp;&emsp;&emsp;</span>); // Add large space every 10 seats
      }
      row.push(
        <span key={i}>
          <Seat id={`seat-${rowIndex}-${i}`} isBooked={false} onSelect={seatClicked} />
        </span>
      );
    }
    return row;
  };

  const seatRows = [];
  for (let i = 0; i < rows; i++) {
    seatRows.push(
      <div key={i} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {generateSeats(i)}
      </div>
    );
  }

  return <div>{seatRows}</div>;
};

export default SeatLayout;
