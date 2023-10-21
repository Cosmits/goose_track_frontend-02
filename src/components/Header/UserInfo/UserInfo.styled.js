import styled from 'styled-components';
import { GlobalStyle } from '../../../Styles/GlobalStyles';

export const UserName = styled.p`
  font-family: ${GlobalStyle.InterTightBold};
  font-size: 14px;
  font-weight: 700;
  line-height: 1.3;
  margin-right: 14px;
  color: ${({ theme }) => theme.mainTextColor};

  @media (min-width: 765px) {
    font-size: 18px;
    line-height: 1;
  }
`;


export const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  overflow: hidden;
  border: 1.8px solid #3e85f3;
  border-radius: 50%;

  & img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  @media (min-width: 765px) {
    width: 44px;
    height: 44px;
  }
`;

export const UserInfoWrapper = styled.div`
  align-items: center;
  display: flex;
`;