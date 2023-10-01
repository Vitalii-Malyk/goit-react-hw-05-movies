import { StyleFilmLink } from 'components/Home/Home.styled';
import { useLocation } from 'react-router-dom';

const MovieListItem = ({ title, id }) => {
  const location = useLocation();
  return (
    title && (
      <li>
        <StyleFilmLink
          to={`/movie/${id.toString()}`}
          state={{ from: location }}
        >
          {title}
        </StyleFilmLink>
      </li>
    )
  );
};

export default MovieListItem;
