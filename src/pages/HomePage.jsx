import { useState, useEffect } from 'react';

import { getTrending } from 'services/apiGet';

import FilmList from 'components/FilmList/FilmList';

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
      <h2
        style={{
          color: '#9f9f9f',
        }}
      >
        Trending today
      </h2>
      <FilmList data={films} />
    </>
  );
};
export default HomePage;
