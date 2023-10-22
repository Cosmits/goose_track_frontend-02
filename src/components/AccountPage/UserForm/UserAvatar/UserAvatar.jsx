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

export const UserAvatar = ({ userName, avatarURL }) => {
  return (
    <>
      <StyledAvatarDiv>
        <StyledAvatarImgThumb>
          <StyledAvatarImg src={avatarURL} alt="Avatar" />
        </StyledAvatarImgThumb>

        <StyledAddAvatarBtn onClick={() => console.log('add avatar')}>
          <img src={plusSVG} width="18px" height="18px"></img>
        </StyledAddAvatarBtn>
      </StyledAvatarDiv>

      <StyledUserInfoThumb>
        <StyledUserNameP>{userName}</StyledUserNameP>
        <StyledUserStatusP>User</StyledUserStatusP>
      </StyledUserInfoThumb>
    </>
  );
};
