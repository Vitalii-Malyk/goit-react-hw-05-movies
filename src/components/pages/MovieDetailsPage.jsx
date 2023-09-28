import { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
// import MovieDetails from 'components/MovieDetails/MovieDetails.jsx';
import { getMovieDetails } from 'components/services/apiGet';

const MovieDetailsPage = () => {
  const { data, setData } = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return console.log('error');
    }
    const fetchData = async () => {
      try {
        const resp = await getMovieDetails(movieId);
        console.log(resp.data);
        setData(resp.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, [movieId, setData]);

  return (
    <>
      <p>{data}</p>
      {/* <MovieDetails data={movie} /> */}
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
