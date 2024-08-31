import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './style/SearchResults.css';
import Navbar from './Navbar';
import MovieDetailModal from './MovieDetailModal';

const API_KEY = 'fa8ea556177c0c06e3a8b381241ea5ca';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  
  function SearchResults() {
    const [results, setResults] = useState([]);
    const [selectedMovieId, setSelectedMovieId] = useState(null);
    const query = useQuery().get('q');
  
    useEffect(() => {
      async function fetchSearchResults() {
        if (!query) return;
  
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=pt-BR&query=${query}`
          );
          const data = await response.json();
          setResults(data.results);
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      }
  
      fetchSearchResults();
    }, [query]);
  
    const handleItemClick = (movie) => {
      console.log('Movie clicked:', movie);
      setSelectedMovieId(movie.id); // Passando o ID do filme
    };
  
    const handleCloseModal = () => {
      setSelectedMovieId(null);
    };
  
    return (
      <div className="search-results">
        <Navbar />
        <h2>Resultados de busca para: "{query}"</h2>
        <div className="results-grid">
          {results.map(result => (
            <div 
              key={result.id} 
              className="result-item" 
              onClick={() => handleItemClick(result)}
            >
              <img 
                src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} 
                alt={result.title || result.name} 
              />
            </div>
          ))}
        </div>
        {selectedMovieId && (
          <MovieDetailModal 
            movieId={selectedMovieId} 
            onClose={handleCloseModal} 
          />
        )}
      </div>
    );
  }
  
  export default SearchResults;
