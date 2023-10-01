import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';

import { Container } from './Layout.styled';

const layout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default layout;
