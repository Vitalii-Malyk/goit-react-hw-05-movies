import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieRewiews } from 'components/services/apiGet';
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
    <>
      {reviews.length > 0 ? (
        <FilmListRevievs>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <TextStyle>{author}</TextStyle>
                <TextStyle>{content}</TextStyle>
              </li>
            );
          })}
        </FilmListRevievs>
      ) : (
        <p>We don't have any reviews for this film</p>
      )}
    </>
  );
};

export default Reviews;
