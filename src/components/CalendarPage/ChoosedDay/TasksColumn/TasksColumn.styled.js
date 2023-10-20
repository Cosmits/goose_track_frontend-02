import styled from 'styled-components';

export const TaskColumn = styled.li`
  width: 335px;
  flex-shrink: 0;
  padding: 18px 6px 10px 18px;
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.5);

  @media screen and (min-width: 768px) {
    width: 344px;
    padding: 18px 8px 28px 20px;
  }
`;
