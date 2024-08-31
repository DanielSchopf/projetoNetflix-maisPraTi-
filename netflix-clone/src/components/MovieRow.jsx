import React, { useEffect, useState, useRef } from 'react';
import './style/MovieRow.css';
import MovieDetailModal from './MovieDetailModal';

function MovieRow({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null); // Estado para armazenar o ID do filme selecionado
  const rowRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(fetchUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  const handlePosterClick = (id) => {
    setSelectedMovieId(id); 
  };

  const handleCloseModal = () => {
    setSelectedMovieId(null);
  };

  const scrollLeft = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({
        left: -window.innerWidth / 2,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({
        left: window.innerWidth / 2,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="movie-row">
      <h2>{title}</h2>
      <div className="movie-row-posters" ref={rowRef}>
        {movies.map(movie => (
          movie.poster_path && (
            <img
              key={movie.id}
              className="movie-row-poster"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              onClick={() => handlePosterClick(movie.id)}
            />
          )
        ))}
      </div>
      <button className="control-btn left" onClick={scrollLeft}>‹</button>
      <button className="control-btn right" onClick={scrollRight}>›</button>

      {selectedMovieId && (
        <MovieDetailModal movieId={selectedMovieId} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default MovieRow;
