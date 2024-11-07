import React from 'react';

function Checkout({ selectedSeats, selectedMovie }) {
  const total = selectedMovie ? selectedSeats.length * selectedMovie.price : 0;

  return (
    <section className="checkout">
      <h2>Checkout</h2>
      <div className="checkout-info">
        <p>Movie: <span>{selectedMovie ? selectedMovie.title : 'No movie selected'}</span></p>
        <p>Seats: <span>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'No seats selected'}</span></p>
        <p>Total: <span>${total}</span></p>
      </div>
      <button className="btn" disabled={!selectedMovie || selectedSeats.length === 0}>
        Confirm Booking
      </button>
    </section>
  );
}

export default Checkout;
