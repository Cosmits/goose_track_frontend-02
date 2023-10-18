import styled from 'styled-components';

export const TaskColumn = styled.div`
  width: 335px;
  max-height: 432px;

  padding: 18px;
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.5);

  @media screen and (min-width: 768px) {
    width: 344px;
    max-height: 568px;
  }

  /* &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 12px;
    background: #f2f2f2;
  }
  
  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background: #e7e5e5;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #3e85f3;
  } */
`;
