import React from 'react';

const seats = [
  { number: 1, isOccupied: false },
  { number: 2, isOccupied: false },
  { number: 3, isOccupied: true },
  { number: 4, isOccupied: false },
  { number: 5, isOccupied: true },
  { number: 6, isOccupied: false },
  { number: 7, isOccupied: false },
  { number: 8, isOccupied: false },
  { number: 9, isOccupied: false },
  { number: 10, isOccupied: false },
  { number: 11, isOccupied: false },
  { number: 12, isOccupied: false },
  { number: 13, isOccupied: false },
  { number: 14, isOccupied: false },
];

function SeatSelection({ selectedSeats, onSeatSelect }) {
  return (
    <section className="seat-selection">
      <h2>Pick Your Seats</h2>
      <div className="seats">
        <div className="row">
          {seats.slice(0, 7).map((seat) => (
            <div
              key={seat.number}
              className={`seat ${seat.isOccupied ? 'occupied' : 'available'} ${
                selectedSeats.includes(seat.number) ? 'selected' : ''
              }`}
              onClick={() => !seat.isOccupied && onSeatSelect(seat.number)}
            >
              {seat.number}
            </div>
          ))}
        </div>
        <div className="row">
          {seats.slice(3).map((seat) => (
            <div
              key={seat.number}
              className={`seat ${seat.isOccupied ? 'occupied' : 'available'} ${
                selectedSeats.includes(seat.number) ? 'selected' : ''
              }`}
              onClick={() => !seat.isOccupied && onSeatSelect(seat.number)}
            >
              {seat.number}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SeatSelection;
