import { useEffect, useState, Suspense, useRef } from 'react';
import {
  useParams,
  Outlet,
  NavLink,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import MovieDetails from 'components/MovieDetails/MovieDetails.jsx';

import { ButtonStyle } from 'pages/MovieDetailsPage.styled';

import { getMovieDetails } from 'services/apiGet';

const MovieDetailsPage = () => {
  const [film, setFilm] = useState('');

  const { movieId } = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const ref = useRef(location);
  console.log(ref.current.state);
  console.log(location);

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

  const backLink = () => {
    navigate(location.state) || navigate(ref.current.state);
    console.log(ref.current.state);
  };

  return (
    <>
      <ButtonStyle onClick={backLink}>Go back</ButtonStyle>
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
