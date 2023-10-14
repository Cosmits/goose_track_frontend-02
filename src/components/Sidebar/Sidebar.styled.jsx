// Sidebar.styled.jsx
import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 250px;
  background-color: #ffffff;
  color: #34343480;
;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

export const Logo = styled.div`
  padding: 20px;
  img {
    max-width: 100%;
  }
`;

export const Menu = styled.div`
  ul {
    list-style: none;
    padding: 0;
    li {
      padding: 10px 20px;
      cursor: pointer;
      &:hover {
        background-color: #ffffff;
      }
    }
  }
`;

export const Calendar = styled.div`
  text-align: center;
  padding: 20px;
`;

export const Statistics = styled.div`
  text-align: center;
  padding: 20px;
`;

export const Logout = styled.div`
  padding: 20px;
  button {
    background-color: #3E85F3;
;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
`;
