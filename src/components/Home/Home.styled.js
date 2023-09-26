import styled from 'styled-components';

export const StyleFilmList = styled('ul')(() => {
  return {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
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

export const StyleImg = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: block;
  max-width: 100%;
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
