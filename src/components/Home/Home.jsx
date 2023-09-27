import { useEffect, useState } from 'react';

import { getTrending } from 'services/apiGet';

import {
  StyleFilmList,
  StyleFilmTitle,
  StyleFilmItem,
  StyleFilmLink,
} from 'components/Home/Home.styled';

const Home = () => {
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
      <StyleFilmList type="1">
        {films.map(({ title, id, name }) => {
          return (
            <StyleFilmItem className="gallery-film" key={id}>
              <StyleFilmLink to="/movies/:movieId">
                <StyleFilmTitle>{title}</StyleFilmTitle>
                <StyleFilmTitle>{name}</StyleFilmTitle>
              </StyleFilmLink>
            </StyleFilmItem>
          );
        })}
      </StyleFilmList>
    </>
  );
};
export default Home;
