const API_KEY = process.env.TMDB_KEY;
'
const requests = {
  fetchPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`,
  fetchAcao: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedia: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchAnimacao: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchTerror: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchSerie: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`,
  fetchSerieCoreia: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_original_language=ko`, 
  HeroSection: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`
};

export default requests;
