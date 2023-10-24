import styled from 'styled-components';

export const TasksColumnsListStyled = styled.ul`
  display: flex;
  gap: 16px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 12px;
    background-color: ${({ theme }) => theme.scrollbarTrack};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: ${({ theme }) => theme.scrollbarThumb};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.btnTextColor};
  }

  @media screen and (min-width: 768px) {
    &::-webkit-scrollbar {
      width: 14px;
    }
  }

  @media screen and (min-width: 1440px) {
    gap: 27px;
  }
`;
