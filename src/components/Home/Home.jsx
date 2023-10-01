import {
  StyleFilmList,
  StyleFilmTitle,
  StyleFilmItem,
  StyleFilmLink,
} from 'components/Home/Home.styled';

const Home = ({ data }) => {
  return (
    <StyleFilmList>
      {data.map(({ title, id }) => {
        return (
          <StyleFilmItem className="gallery-film" key={id}>
            <StyleFilmLink to={`/movies/${id}`}>
              <StyleFilmTitle>{title}</StyleFilmTitle>
            </StyleFilmLink>
          </StyleFilmItem>
        );
      })}
    </StyleFilmList>
  );
};

export default Home;
