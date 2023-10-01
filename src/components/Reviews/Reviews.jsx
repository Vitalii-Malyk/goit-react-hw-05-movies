import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieRewiews } from 'services/apiGet';

import { FilmListRevievs, TextStyle } from 'components/Reviews/Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await getMovieRewiews(movieId);
        setReviews(resp);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [movieId]);
  return (
    <div>
      <FilmListRevievs>
        {reviews.length > 0 ? (
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <TextStyle>{author}</TextStyle>
              <TextStyle>{content}</TextStyle>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this film</p>
        )}
      </FilmListRevievs>
    </div>
  );
};

export default Reviews;
