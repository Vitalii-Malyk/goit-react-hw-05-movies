import { useLocation } from 'react-router-dom';
import { useRef } from 'react';

import {
  WraperStyle,
  WraperTextStyle,
  TitleStyle,
  TitleTextStyle,
  TextStyle,
  ListStyle,
  ButtonStyle,
} from 'components/MovieDetails/MovieDetails.styled';

const MovieDetails = ({ dataFilm }) => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  const {
    genres,
    original_title,
    release_date,
    overview,
    poster_path,
    vote_average,
  } = dataFilm;
  const releaseDate = new Date(release_date);
  const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';
  const DEFAULT_IMAGE_URL =
    'https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg';
  const releaseYear = Number.isNaN(releaseDate)
    ? 'Unknown'
    : releaseDate.getFullYear();
  const userScore = Math.round((Number(vote_average) * 100) / 10);

  return (
    <>
      <ButtonStyle to={backLinkHref.current}>Go home</ButtonStyle>
      <WraperStyle>
        <img
          src={
            poster_path
              ? `${BASE_URL_IMG}${poster_path}`
              : `${DEFAULT_IMAGE_URL}`
          }
          alt={original_title}
          width="200"
        />
        <WraperTextStyle>
          <TitleStyle>
            {original_title} ({releaseYear})
          </TitleStyle>
          <TitleTextStyle>User Score: {userScore}%</TitleTextStyle>
          <TitleTextStyle>Overview</TitleTextStyle>
          <TextStyle>{overview}</TextStyle>
          <TitleTextStyle>Genres</TitleTextStyle>
          <ListStyle>
            {genres.map(({ id, name }) => (
              <li key={id}>
                <TextStyle>{name}</TextStyle>
              </li>
            ))}
          </ListStyle>
        </WraperTextStyle>
      </WraperStyle>
      <h4>Additional information</h4>
    </>
  );
};

export default MovieDetails;
