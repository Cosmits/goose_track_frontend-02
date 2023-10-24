import styled from 'styled-components';

export const TaskCard = styled.li`
  flex-shrink: 0;
  width: 299px;
  height: 108px;
  padding: 14px 14px 18px 15px;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background-color: ${({ theme }) => theme.mainBGColor};

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 112px;
  }
`;

export const TaskCardTitle = styled.p`
  overflow: hidden;
  color: ${({ theme }) => theme.mainTextColor};
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'InterTightMedium', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: ${() => 18 / 14};
`;

export const TaskCardWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TaskCardInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TaskCardUserWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
`;

export const TaskCardAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${({ src }) => src});
  flex-shrink: 0;
  border: 1.8px solid #3e85f3;
`;

export const TaskCardSuccess = styled.div`
  height: 20px;
  padding: 4px 12px;
  border-radius: 4px;
  background-color: ${({ color }) => color};
`;

export const TaskCardSuccessText = styled.p`
  color: ${({ theme }) => theme.taskCardSuccessText};
  font-family: 'InterSemiBold', sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: ${() => 12 / 10};
`;
