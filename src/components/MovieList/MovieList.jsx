import MovieListItem from 'components/MovieListItem/MovieListItem';
import { MovieListStyle } from 'components/MovieList/MovieList.style';

const MovieList = ({ movies }) => {
  return (
    <MovieListStyle>
      {movies.map(({ id, title, name }) => (
        <MovieListItem key={id} title={title || name} id={id} />
      ))}
    </MovieListStyle>
  );
};

export default MovieList;
