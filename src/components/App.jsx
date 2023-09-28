import { Routes, Route } from 'react-router-dom';
import HomePage from 'components/pages/HomePage';
import MoviesPage from 'components/pages/MoviesPage';
import MovieDetailsPage from 'components/pages/MovieDetailsPage';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

import Layout from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
