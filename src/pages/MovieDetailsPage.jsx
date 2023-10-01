import { useEffect, useState, Suspense } from 'react';
import { useParams, Outlet, NavLink } from 'react-router-dom';

import MovieDetails from 'components/MovieDetails/MovieDetails.jsx';

import { getMovieDetails } from 'services/apiGet';

const MovieDetailsPage = () => {
  const [film, setFilm] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await getMovieDetails(movieId);
        setFilm(resp);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      {film && <MovieDetails dataFilm={film} />}
      <ul>
        <li>
          <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
