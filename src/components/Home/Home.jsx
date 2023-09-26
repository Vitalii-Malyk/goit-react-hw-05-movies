import { useEffect, useState } from 'react';

// import getTrending from 'Services/ApiGet';

import { StyleFilmList } from 'components/Home/Home.styled';

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

  return (
    <>
      <h1>films</h1>
      <StyleFilmList>
        {films.map(({ title, id, release_date, vote_average }) => {
          return (
            <li className="gallery-item" key={id}>
              <h3>{title}</h3>
              <p>Release date: {release_date}</p>
              <p>Rating: {vote_average}</p>
            </li>
          );
        })}
      </StyleFilmList>
    </>
  );
};

export default Home;
