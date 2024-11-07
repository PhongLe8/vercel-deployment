import React, { useState } from 'react';
import Header from './components/Header.jsx';
import MovieSelection from './components/MovieSelection.jsx';
import SeatSelection from './components/SeatSelection.jsx';
import Checkout from './components/Checkout.jsx';
import Footer from './components/Footer.jsx';
import './style.css';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
    setSelectedSeats([]); // Reset seats on movie change
  };

  const handleSeatSelect = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  return (
    <div className="App">
      <Header />
      <main>
        <MovieSelection onMovieSelect={handleMovieSelect} />
        <SeatSelection selectedSeats={selectedSeats} onSeatSelect={handleSeatSelect} />
        <Checkout selectedSeats={selectedSeats} selectedMovie={selectedMovie} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
