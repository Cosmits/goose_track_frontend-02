import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthNavLink = styled(NavLink)`
  display:block;
  font-family: InterSemiBold;
  font-size: 12px;
  line-height: 1.17;
  color: var(--main-blue);
  text-decoration:underline;
  text-align:center;
  transition: color 250ms linear;

   &:hover,
   &:focus {
    color: var(--hover-blue);
  }

  @media screen and (min-width: 768px) {
  font-size: 18px;
  line-height: 1.33;
  }
`;