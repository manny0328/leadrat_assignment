import React, { useState } from 'react';
import SeatLayout from './components/SeatLayout';
import SeatSelector from './components/SeatSelector';

const App = () => {
  const [seats,] = useState([
    { id: 1, type: 'Standard', isBooked: false },
    { id: 2, type: 'Premium', isBooked: false },
    // Add more seats as needed
  ]);

  const handleSeatClicked = (id, type) => {
    // Handle seat click logic
  };

  const handleSeatSelect = (selectedType, selectedCount) => {
    // Handle seat selection logic
  };

  return (
    <div className="App">
      <h1>Welcome to Book My Seat</h1>
      <SeatSelector
        seatTypes={['Standard', 'Premium']} // Add more seat types as needed
        onSeatSelect={handleSeatSelect}
      />
      <SeatLayout seats={seats} seatClicked={handleSeatClicked} />
    </div>
  );
};

export default App;
