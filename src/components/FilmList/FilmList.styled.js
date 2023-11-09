import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyleFilmList = styled('ul')(() => {
  return {
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    margin: '20px 0 0 0',
    padding: 0,
    gap: '15px',
    justifyContent: 'center',
  };
});

export const StyleFilmItem = styled('li')(() => {
  return {
    width: 'fit-content',
  };
});

export const StyleFilmText = styled('p')(() => {
  return {
    margin: 0,
  };
});

export const StyleFilmLink = styled(Link)(() => {
  return {
    textDecoration: 'none',
    color: 'inherit',
  };
});
