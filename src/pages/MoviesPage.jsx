import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Muvies from 'components/Movies/Movies';

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
