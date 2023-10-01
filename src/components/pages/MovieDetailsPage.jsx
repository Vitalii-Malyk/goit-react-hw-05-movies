import { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import MovieDetails from 'components/MovieDetails/MovieDetails.jsx';
import { getMovieDetails } from 'components/services/apiGet';

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
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
