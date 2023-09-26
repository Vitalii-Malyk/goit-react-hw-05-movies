import styled from 'styled-components';

export const StyleFilmList = styled('ul')(() => {
  return {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
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
