import styled from 'styled-components';

export const AddFeedbackButton = styled.button`
  border: none;
  border-radius: 10px;
  background: var(--main-blue, #3e85f3);
  /* padding: 8px 20px; */
  margin-right: 18px;

  /* text */
  font-family: 'InterSemiBold';
  color: #fff;
  font-weight:600;
  font-size: 14px;
  line-height: 1.28;
  transition: background-color 300ms linear;
  &:hover,
  &:focus {
    background: #2B78EF;
  }
  @media (min-width: 768px) {
    margin-right: 24px;
  }
`;
