import React, { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import MovieDetails from 'components/MovieDetails/MovieDetails.jsx';

import axios from 'axios';

const API_KEY = 'b97f9ea2fc34eb883d9df20cfe1d942b';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

const MovieDetailsPage = () => {
  const { movie, setMovie } = useState([]);
  const { movieId } = useParams('');

  useEffect(() => {
    const getMovie = async () => {
      const data = await axios.get(`movie/${movieId}`, {});

      return data;
    };
    async function getMovies() {
      try {
        const { data } = await getMovie();
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, [movieId, setMovie]);

  return (
    <>
      <MovieDetails data={movie} />
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
