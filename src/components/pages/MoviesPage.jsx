import Muvies from 'components/Movies/Movies';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const MoviesPage = () => {
  return (
    <>
      <Muvies />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesPage;
