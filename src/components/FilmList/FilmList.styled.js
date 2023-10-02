import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyleFilmList = styled('ul')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    margin: '20px 0 0 0',
    padding: 0,
    gap: '15px',
  };
});

export const StyleFilmItem = styled('li')(() => {
  return {
    width: 'fit-content',
  };
});

export const StyleFilmTitle = styled('h4')(() => {
  return {
    margin: 0,
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
