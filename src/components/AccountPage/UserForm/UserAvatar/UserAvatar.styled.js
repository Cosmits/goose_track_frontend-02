import styled from 'styled-components';

const StyledAvatarDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -31px;
  width: 124px;
  height: 124px;
  padding: 2px;
  background-color: #3e85f3;
  border-radius: 50%;
`;

const StyledAvatarImgThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  overflow: hidden;
`;

const StyledAvatarImg = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const StyledAddAvatarBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -4px;
  right: 15px;
  width: 24px;
  height: 24px;
  border: none;
  padding: 0;
  border-radius: 50%;
  background-color: #3e85f3;

  &:hover,
  &:focus {
    background-color: #2b78ef;
  }
`;

const StyledUserInfoThumb = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const StyledUserNameP = styled.p`
  margin-top: 59px;
  /* !--------------------- */
  font-family: InterTight;
  /* !--------------------- */
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  color: ${({ theme }) => theme.secondaryTextColor};
`;

const StyledUserStatusP = styled.p`
  font-family: InterTight;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
  color: ${({ theme }) => theme.secondaryTextColor};
`;

export {
  StyledAvatarDiv,
  StyledAvatarImgThumb,
  StyledAvatarImg,
  StyledAddAvatarBtn,
  StyledUserInfoThumb,
  StyledUserNameP,
  StyledUserStatusP,
};
