import {
  StyleFilmList,
  StyleFilmTitle,
  StyleFilmItem,
  StyleFilmLink,
} from 'components/Home/Home.styled';

const Home = ({ data }) => {
  return (
    <StyleFilmList>
      {data.map(({ title, id, name }) => {
        return (
          <StyleFilmItem className="gallery-film" key={id}>
            <StyleFilmLink to="/movies/:movieId">
              <StyleFilmTitle>{title}</StyleFilmTitle>
              <StyleFilmTitle>{name}</StyleFilmTitle>
            </StyleFilmLink>
          </StyleFilmItem>
        );
      })}
    </StyleFilmList>
  );
};

export default Home;
