import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Muvies from 'components/Movies/Movies';

const MoviesPage = () => {
  return (
    <>
      <Muvies />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesPage;
