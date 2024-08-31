import React from 'react';
import Navbar from '../components/navbar';
import MovieRow from '../components/MovieRow';
import requests from '../services/tmdb';
import '../pages/home.css'
import HeroSection from '../components/HeroSection';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <div id="Popular">
        <MovieRow id="Popular" title="Populares" fetchUrl={requests.fetchPopular} /> 
      </div>
      <MovieRow title="Ação" fetchUrl={requests.fetchAcao} />
      <div id="Series">
        <MovieRow id="Series" title="Séries" fetchUrl={requests.fetchSerie} />
        <MovieRow id="SeriesCoreanas" title="Séries Coreanas" fetchUrl={requests.fetchSerieCoreia} />
      </div>
      <MovieRow title="Terror" fetchUrl={requests.fetchTerror} />
      <MovieRow title="Comédia" fetchUrl={requests.fetchComedia} />
      <MovieRow title="Animação" fetchUrl={requests.fetchAnimacao} />
    </div>
  );
}

export default Home;
