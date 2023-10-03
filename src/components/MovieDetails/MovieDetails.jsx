import {
  WraperStyle,
  WraperTextStyle,
  TitleStyle,
  TitleTextStyle,
  TextStyle,
  ListStyle,
} from 'components/MovieDetails/MovieDetails.styled';

import defaultPoster from 'components/img/no_image.jpeg';

const MovieDetails = ({ dataFilm }) => {
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

  const releaseYear = Number.isNaN(releaseDate)
    ? 'Unknown'
    : releaseDate.getFullYear();
  const userScore = Math.round((Number(vote_average) * 100) / 10);

  return (
    <>
      <WraperStyle>
        {poster_path ? (
          <img
            src={`${BASE_URL_IMG}${poster_path}`}
            alt={original_title}
            width="200"
          />
        ) : (
          <img
            src={defaultPoster}
            alt={original_title}
            width="200"
            height="300"
          />
        )}
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
