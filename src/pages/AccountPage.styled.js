// Serhii
import styled from 'styled-components';

const StyledAcountWrapperDiv = styled.div`
  margin-top: 95px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  gap: 40px;
  padding: 59px 18px 40px 18px;
  border-radius: 16px;
  background-color: var(--white);
`;

const StyledAvatarDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -31px;
  width: 124px;
  height: 124px;
  padding: 2px;
  background-color: var(--main-blue);
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
  background-color: var(--main-blue);
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
  font-family: Inter;
  /* !--------------------- */
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
`;

const StyledUserStatusP = styled.p`
  color: #343434;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
`;

export {
  StyledAcountWrapperDiv,
  StyledAvatarDiv,
  StyledAvatarImgThumb,
  StyledAvatarImg,
  StyledAddAvatarBtn,
  StyledUserInfoThumb,
  StyledUserNameP,
  StyledUserStatusP,
};
