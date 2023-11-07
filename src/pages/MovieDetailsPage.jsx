import { useEffect, useState, Suspense, useRef } from 'react';
import { useParams, Outlet, useNavigate, useLocation } from 'react-router-dom';

import MovieDetails from 'components/MovieDetails/MovieDetails.jsx';

import { ButtonStyle, NavLinkStyle } from 'pages/MovieDetailsPage.styled';

import { getMovieDetails } from 'services/apiGet';

const MovieDetailsPage = () => {
  const [film, setFilm] = useState('');

  const { movieId } = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const ref = useRef(location);

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
  };

  return (
    <>
      <ButtonStyle onClick={backLink}>Go back</ButtonStyle>
      {film && <MovieDetails dataFilm={film} />}
      <ul>
        <li>
          <NavLinkStyle to={`/movies/${movieId}/cast`}>Cast</NavLinkStyle>
        </li>
        <li>
          <NavLinkStyle to={`/movies/${movieId}/reviews`}>Reviews</NavLinkStyle>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
