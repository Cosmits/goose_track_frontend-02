import styled from "styled-components";

export const TasksList = styled.ul`
  height: 40vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 12px;
    background-color: #f2f2f2;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: #e7e5e5;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #3e85f3;
  }

  @media screen and (min-width: 768px) {
    gap: 18px;
    margin-bottom: 32px;

    &::-webkit-scrollbar {
      width: 8px;
    }
  }

  @media screen and (min-width: 1440px) {
    height: 50vh;
  }
`;
