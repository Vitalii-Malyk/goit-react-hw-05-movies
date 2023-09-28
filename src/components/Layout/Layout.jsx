import React from 'react';
import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';

const layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default layout;
