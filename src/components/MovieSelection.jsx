import React from 'react';

const movies = [
  { title: 'Movie Title 1', price: 10, image: 'movie1.jpg' },
  { title: 'Movie Title 2', price: 12, image: 'movie2.jpg' },
  { title: 'Movie Title 3', price: 8, image: 'movie3.jpg' },
];

function MovieSelection({ onMovieSelect }) {
  return (
    <section className="movie-selection">
      <h2>Select a Movie</h2>
      <div className="movies">
        {movies.map((movie, index) => (
          <div className="movie" key={index}>
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
            <button onClick={() => onMovieSelect(movie)}>Select</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MovieSelection;
