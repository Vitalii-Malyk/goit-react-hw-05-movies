import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid #9f9f9f;

  > nav {
    display: flex;
    gap: 10px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #9f9f9f;
  font-weight: 500;

  &.active {
    color: orangered;
  }
`;
