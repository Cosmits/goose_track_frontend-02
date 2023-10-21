import styled from 'styled-components';

export const UserName = styled.p`
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

export const BackgroundName = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, #3E85F3 0%, rgba(62, 133, 243, 0.00) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserNameIcon = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.3;

  color: ${({ theme }) => theme.mainTextColor};
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