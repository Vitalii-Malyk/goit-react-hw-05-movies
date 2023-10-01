import { useSearchParams } from 'react-router-dom';
import {
  SearchBtn,
  SearchContainer,
  SearchForm,
  SearchInput,
} from 'components/Movies/Movies.styled';
import { searchMovies } from 'components/services/apiGet';
import { useEffect, useCallback, useRef, useState } from 'react';
import Home from 'components/Home/Home';

const Movies = () => {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const ref = useRef(query);

  const handlerChange = ({ target: { value } }) => {
    setValue(value);
    value ? setSearchParams({ query: value }) : setSearchParams({});
  };

  const getInputValue = e => {
    e.preventDefault();
    getMovieByQuery(query);
  };

  const getMovieByQuery = useCallback(async searchQuery => {
    try {
      const {
        data: { results },
      } = await searchMovies(searchQuery);
      setMovies(results);
    } catch (error) {}
  }, []);

  useEffect(() => {
    setValue(ref.current);
    ref.current && getMovieByQuery(ref.current);
  }, [getMovieByQuery]);

  return (
    <>
      <SearchForm onSubmit={getInputValue}>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search..."
            autoFocus
            required
            value={value}
            onChange={handlerChange}
          />
          <SearchBtn type="submit"></SearchBtn>
        </SearchContainer>
      </SearchForm>
      {movies &&
        (movies.length > 1 ? (
          <Home data={movies} />
        ) : (
          <p>Nothing was found for your request</p>
        ))}
    </>
  );
};

export default Movies;
