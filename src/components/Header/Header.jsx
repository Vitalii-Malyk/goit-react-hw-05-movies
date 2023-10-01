import React from 'react';

import { HeaderStyled, StyledNavLink } from './Header.styled';

const Header = () => {
  return (
    <HeaderStyled>
      <nav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
