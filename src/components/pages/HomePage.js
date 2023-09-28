import { useState, useEffect } from 'react';

// import getTrending from 'services/apiGet';

import axios from 'axios';
import Home from 'components/Home/Home';

const API_KEY = 'b97f9ea2fc34eb883d9df20cfe1d942b';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

const getTrending = async () => {
  const { data } = await axios.get('trending/movie/day', {});

  return data.results;
};
const HomePage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function getTreningMovies() {
      try {
        const movies = await getTrending();
        setFilms(movies);
      } catch (error) {
        console.log(error);
      }
    }
    getTreningMovies();
  }, []);
  return (
    <>
      <h2>Trending today</h2>
      <Home data={films} />
    </>
  );
};
export default HomePage;
