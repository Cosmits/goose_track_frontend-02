import styled from 'styled-components';
import { GlobalStyle } from '../../../Styles/GlobalStyles';


export const AddFeedbackButton = styled.button`
  border: none;
  border-radius: 10px;
  background: var(--main-blue, #3e85f3);
  padding: 8px 20px;
  margin-right: 18px;

  /* text */
  font-family: ${GlobalStyle.InterSemiBold};
  color: #fff;
  font-weight:600;
  font-size: 14px;
  line-height: 1.28;
  .focus {
    background: #2b78ef;
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }
  @media (min-width: 768px) {
    margin-right: 24px;
  }
`;
