import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthNavLink = styled(NavLink)`
  display:block;
  font-family: Inter,sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.17;
  color: #3E85F3;
  text-decoration:underline;
  text-align:center;
  transition: all 250ms linear;

   &:hover,
   &:focus {
    color: #2B78EF;
  }

  @media screen and (min-width: 768px) {
  font-size: 18px;
  line-height: 1.33;
  }
`;