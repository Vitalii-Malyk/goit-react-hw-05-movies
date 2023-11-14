import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ButtonStyle = styled.button`
  display: block;
  color: #9f9f9f;
  padding: 5px;
  margin-bottom: 20px;
  width: fit-content;
  border: 1px solid #9f9f9f;
  border-radius: 10px;
  text-decoration: none;
  background-color: #1f2123;
  &:hover,
  &:focus {
    color: blueviolet;
    border-color: blueviolet;
  }
`;

export const NavLinkStyle = styled(NavLink)`
  text-decoration: none;
  color: #9f9f9f;
  &:hover,
  &:focus {
    color: blueviolet;
    border-color: blueviolet;
  }
`;
export const StyleList = styled('ul')(() => {
  return {
    listStyle: 'none',
  };
});
