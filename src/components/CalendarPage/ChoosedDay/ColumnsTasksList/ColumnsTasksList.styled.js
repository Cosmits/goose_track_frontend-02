import styled from 'styled-components';

export const TasksList = styled.ul`
  max-height: 40vh;
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
    gap: 18px;
    margin-bottom: 32px;

    &::-webkit-scrollbar {
      width: 8px;
    }
  }

  @media screen and (min-width: 1440px) {
    max-height: 50vh;
  }
`;
