import { useSearchParams, useLocation } from 'react-router-dom';
import { useEffect, useCallback, useRef, useState } from 'react';

import { searchMovies } from 'services/apiGet';
import FilmList from 'components/FilmList/FilmList';

import {
  SearchBtn,
  SearchContainer,
  SearchForm,
  SearchInput,
} from 'components/Movies/Movies.styled';

const Movies = () => {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const ref = useRef(query);
  const location = useLocation();

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
          <FilmList data={movies} state={location} />
        ) : (
          <p>Nothing was found for your request</p>
        ))}
    </>
  );
};

export default Movies;
