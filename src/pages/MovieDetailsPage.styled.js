import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ButtonStyle = styled.button`
  display: block;
  color: black;
  padding: 5px;
  margin-bottom: 20px;
  width: fit-content;
  border: 1px solid black;
  border-radius: 10px;
  text-decoration: none;
  background-color: white;
  &:hover,
  &:focus {
    color: blueviolet;
    border-color: blueviolet;
  }
`;

export const NavLinkStyle = styled(NavLink)`
  text-decoration: none;
  &:hover,
  &:focus {
    color: blueviolet;
    border-color: blueviolet;
  }
`;
