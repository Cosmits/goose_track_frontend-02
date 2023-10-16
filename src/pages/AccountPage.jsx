// Serhii
import {
  StyledAcountWrapperDiv,
  StyledAvatarDiv,
  StyledAvatarImgThumb,
  StyledAvatarImg,
  StyledAddAvatarBtn,
  StyledUserInfoThumb,
  StyledUserNameP,
  StyledUserStatusP,
} from './AccountPage.styled';
import { UserForm } from '../components/UserForm/UserForm';
import examplePicture from '../assets/background.png';
import plusSVG from '../../public/plus.svg';

export const AccountPage = () => {
  return (
    <StyledAcountWrapperDiv>
      <StyledAvatarDiv>
        <StyledAvatarImgThumb>
          <StyledAvatarImg src={examplePicture} alt="Avatar" />
        </StyledAvatarImgThumb>

        <StyledAddAvatarBtn>
          <img src={plusSVG} width="18px" height="18px"></img>
        </StyledAddAvatarBtn>
      </StyledAvatarDiv>
      <StyledUserInfoThumb>
        <StyledUserNameP>Nadiia Doe</StyledUserNameP>
        <StyledUserStatusP>User</StyledUserStatusP>
      </StyledUserInfoThumb>
      <UserForm />
    </StyledAcountWrapperDiv>
  );
};
