import {
  StyledAvatarDiv,
  StyledAvatarImgThumb,
  StyledAvatarImg,
  StyledAddAvatarBtn,
  StyledUserInfoThumb,
  StyledUserNameP,
  StyledUserStatusP,
} from './UserAvatar.styled';

import plusSVG from '../../../../../src/images/AccountPage/plus.svg';
import examplePicture from '.././background.png';

export const UserAvatar = ({ UserName, UserStatus, id, currentAvatarURL }) => {
  console.log('currentAvatarURL: ', currentAvatarURL);
  console.log('id: ', id);
  return (
    <>
      <StyledAvatarDiv>
        {/* <StyledError>
        <ErrorMessage errors={errors} name={inputName} />
      </StyledError> */}
        <StyledAvatarImgThumb>
          <StyledAvatarImg src={examplePicture} alt="Avatar" />
        </StyledAvatarImgThumb>

        <StyledAddAvatarBtn>
          <img src={plusSVG} width="18px" height="18px"></img>
        </StyledAddAvatarBtn>
      </StyledAvatarDiv>

      <StyledUserInfoThumb>
        <StyledUserNameP>{UserName} 1</StyledUserNameP>
        <StyledUserStatusP>{UserStatus} 2</StyledUserStatusP>
      </StyledUserInfoThumb>
    </>
  );
};
