import {
  StyleFilmList,
  StyleFilmTitle,
  StyleFilmItem,
  StyleFilmLink,
} from 'components/FilmList/FilmList.styled';
import { useLocation } from 'react-router-dom';

const FilmList = ({ data }) => {
  const location = useLocation();
  return (
    <StyleFilmList>
      {data.map(({ title, id }) => {
        return (
          <StyleFilmItem className="gallery-film" key={id}>
            <StyleFilmLink to={`/movies/${id}`} state={location}>
              <StyleFilmTitle>{title}</StyleFilmTitle>
            </StyleFilmLink>
          </StyleFilmItem>
        );
      })}
    </StyleFilmList>
  );
};

export default FilmList;
