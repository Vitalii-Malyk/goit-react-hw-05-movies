import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from 'services/apiGet';

import defaultPoster from 'components/img/no_image.jpeg';

import {
  FilmListCast,
  TextStyle,
  WrapperImgStyle,
  ImgStyle,
} from 'components/Cast/Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setcast] = useState([]);
  const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';

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
      {cast.length > 0 ? (
        <FilmListCast>
          {cast.map(({ id, name, profile_path }) => {
            return (
              <li key={id}>
                {profile_path ? (
                  <div width="200" height="300">
                    <ImgStyle
                      src={`${BASE_URL_IMG}${profile_path}`}
                      alt={name}
                    />
                  </div>
                ) : (
                  <WrapperImgStyle width="200" height="300">
                    <ImgStyle src={defaultPoster} alt={name} />
                  </WrapperImgStyle>
                )}
                <TextStyle>{name}</TextStyle>
              </li>
            );
          })}
        </FilmListCast>
      ) : (
        <TextStyle>
          We do not yet have information on the actors for this video.
        </TextStyle>
      )}
    </>
  );
};

export default Cast;
