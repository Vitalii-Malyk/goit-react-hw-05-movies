import { useState, useEffect } from 'react';

import { getTrending } from 'services/apiGet';

import Home from 'components/FilmList/FilmList';

const HomePage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await getTrending();
        setFilms(movies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h2>Trending today</h2>
      <Home data={films} />
    </>
  );
};
export default HomePage;
