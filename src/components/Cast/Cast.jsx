import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/apiGet';
import { FilmListCast, TextStyle } from 'components/Cast/Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setcast] = useState([]);
  const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';
  const DEFAULT_IMAGE_URL =
    'https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await getMovieCredits(movieId);
        setcast(resp);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      <FilmListCast>
        {cast.map(({ id, name, profile_path }) => {
          return (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `${BASE_URL_IMG}${profile_path}`
                    : `${DEFAULT_IMAGE_URL}`
                }
                alt={name}
                width={200}
              />
              <TextStyle>{name}</TextStyle>
            </li>
          );
        })}
      </FilmListCast>
    </>
  );
};

export default Cast;
