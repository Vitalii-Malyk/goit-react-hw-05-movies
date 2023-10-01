import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WraperStyle = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const ButtonStyle = styled(Link)`
  display: block;
  color: black;
  padding: 5px;
  margin-bottom: 20px;
  width: fit-content;
  border: 1px solid black;
  border-radius: 10px;
  text-decoration: none;
  &:hover,
  &:focus {
    color: blueviolet;
    border-color: blueviolet;
  }
`;

export const WraperTextStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleStyle = styled.h2`
  margin: 0 0 20px 0;
`;

export const TitleTextStyle = styled.h4`
  margin: 0 0 20px 0;
`;
export const TextStyle = styled.p`
  margin: 0 0 20px 0;
`;

export const ListStyle = styled.ul`
  list-style: none;
  margin: 0 0 20px 0;
  padding: 0;
  display: flex;
  gap: 10px;
`;
