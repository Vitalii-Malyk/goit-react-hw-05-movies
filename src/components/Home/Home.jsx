import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

// import getTrending from 'Services/ApiGet';

import {
  StyleFilmList,
  StyleFilmTitle,
  StyleFilmText,
  StyleFilmItem,
} from 'components/Home/Home.styled';

const Home = () => {
  const [films, setfilms] = useState([]);

  useEffect(() => {
    const getTrending = () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTdmOWVhMmZjMzRlYjg4M2Q5ZGYyMGNmZTFkOTQyYiIsInN1YiI6IjY1MTFkNGE4ZTFmYWVkMDEzYTBiZWY5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._FlD5OFNYmt2b9cp7NIwxLnKKey2vygd7hk2J5v3WfA',
        },
      };

      fetch(
        'https://api.themoviedb.org/3/trending/all/day?language=en-US',
        options
      )
        .then(response => response.json())
        .then(response => setfilms(response.results))
        .catch(err => console.error(err));
    };
    getTrending();
  }, []);
  console.log(films);
  return (
    <>
      <h2>Trending today</h2>
      <StyleFilmList>
        {films.map(({ title, id, release_date, vote_average, name }) => {
          return (
            <StyleFilmItem className="gallery-film" key={id}>
              <Link to="film">
                <StyleFilmTitle>{title}</StyleFilmTitle>
                <StyleFilmTitle>{name}</StyleFilmTitle>
                <StyleFilmText>Release date: {release_date}</StyleFilmText>
                <StyleFilmText>Rating: {vote_average}</StyleFilmText>
              </Link>
            </StyleFilmItem>
          );
        })}
      </StyleFilmList>
    </>
  );
};

export default Home;
