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
  border: 1px solid black;
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
`;

const StyledUserStatusP = styled.p`
  color: #343434;
  font-family: InterTight;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
`;

// ---------------------------

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 18px;
  width: 299px;
`;

const StyledInputThumbDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

const StyledLabel = styled.label`
  color: #111;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 42px;
  color: #111;
  padding: 0 14px;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */

  border-radius: 8px;
  border: 1px solid rgba(17, 17, 17, 0.1);
`;

const StyledButton = styled.button`
  display: flex;
  width: 195px;
  height: 46px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 16px;
  background-color: #3e85f3;
  border: none;
  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
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
  StyledForm,
  StyledInputThumbDiv,
  StyledLabel,
  StyledInput,
  StyledButton,
};
