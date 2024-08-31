import React, { useEffect, useState } from 'react';
import './style/HeroSection.css';
import axios from 'axios';
import requests from '../services/tmdb';

function HeroSection() {
  const [featuredItem, setFeaturedItem] = useState(null);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    async function fetchFeaturedItem() {
      try {
        const response = await axios.get(requests.HeroSection);
        const items = response.data.results;
        const randomIndex = Math.floor(Math.random() * items.length);
        setFeaturedItem(items[randomIndex]);
      } catch (error) {
        console.error("Error fetching the featured item:", error);
      }
    }
    fetchFeaturedItem();
  }, []);

  const handleMoreInfoClick = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div
      className="hero"
      style={{
        background: featuredItem
          ? `url(https://image.tmdb.org/t/p/original${featuredItem.backdrop_path}) center center / cover no-repeat`
          : 'url(path-to-default-image.jpg) center center / cover no-repeat',
      }}
    >
      {featuredItem && (
        <>
          <div className="hero-content">
            <h1 className="hero-title">{featuredItem.title}</h1>

            <div className="hero-buttons">
              <button className="hero-button-watch">Assistir</button>
              <button className="hero-button-info" onClick={handleMoreInfoClick}>
                Mais Informações
              </button>
            </div>

            {showDescription && (
              <div className="hero-description">
                <p>{featuredItem.overview}</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default HeroSection;
