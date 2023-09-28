import { Link } from 'react-router-dom';
import {
  WraperStyle,
  ButtonStyle,
} from 'components/MovieDetails/MovieDetails.styled';

const MovieDetails = ({ data }) => {
  const { original_title, overview, poster_path } = data;

  return (
    <WraperStyle>
      <ButtonStyle>Go home</ButtonStyle>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : 'https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg'
        }
        alt={original_title}
        width="200"
      />
      <div>{original_title}</div>
      <div>{overview}</div>
      <ul>
        <li>
          <Link to="cast">cast</Link>
        </li>
        <li>
          <Link to="reviews">reviews</Link>
        </li>
      </ul>
    </WraperStyle>
  );
};

export default MovieDetails;