import { Link } from 'react-router-dom';
import {
  WraperStyle,
  ButtonStyle,
  WraperTextStyle,
} from 'components/MovieDetails/MovieDetails.styled';

const MovieDetails = ({ data }) => {
  const { original_title, overview, poster_path, release_date } = data;
  const releaseDate = new Date(release_date);
  const releaseYear = Number.isNaN(releaseDate)
    ? 'Unknown'
    : releaseDate.getFullYear();

  return (
    <>
      <ButtonStyle>Go home</ButtonStyle>
      <WraperStyle>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg'
          }
          alt={original_title}
          width="200"
        />
        <WraperTextStyle>
          <h3>
            {original_title} ({releaseYear})
          </h3>
          <p>{overview}</p>
          {/* <p>
            {genres.map(genre => (
              <span key={genre.id}> {genre.name}</span>
            ))}
          </p> */}
        </WraperTextStyle>
        <ul>
          <li>
            <Link to="cast">cast</Link>
          </li>
          <li>
            <Link to="reviews">reviews</Link>
          </li>
        </ul>
      </WraperStyle>
    </>
  );
};

export default MovieDetails;
