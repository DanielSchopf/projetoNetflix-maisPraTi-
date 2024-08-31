import React, { useEffect, useState } from 'react';
import './style/MovieDetailModal.css';

const API_KEY = 'fa8ea556177c0c06e3a8b381241ea5ca';


function MovieDetailModal({ movieId, onClose }) {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      if (!movieId) return;

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2>{movieDetails.title}</h2>
        <p><strong>Descrição:</strong> {movieDetails.overview}</p>
        <p><strong>Avaliação:</strong> {movieDetails.vote_average}</p>
        <p><strong>Ano de Lançamento:</strong> {movieDetails.release_date}</p>
        <button className="button-watch">Assistir</button>
      </div>
    </div>
  );
}

export default MovieDetailModal;
