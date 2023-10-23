
import { useSelector } from 'react-redux';
import {
  BackgroundName,
  UserAvatar,
  UserInfoWrapper,
  UserName,
  UserNameIcon,
} from './UserInfo.styled';
import { selectUser } from '../../../redux/auth/selectors';

const UserInfo = () => {
  const {userName, avatarURL} = useSelector(selectUser);
  const getInitials = (userName) => {
    if (userName) {
      const initials = userName
        .split(' ')
        .map((word) => word.charAt(0))
        .join('')
        .toUpperCase();
      return initials;
    } else {
      return userName;
    }
  };

  const getFirstName = (userName) => {
    if (userName) {
      return userName.split(' ')[0];
    } else {
      return userName;
    }
  };

  const displayName = avatarURL ? (
    <img src={avatarURL} alt="UserAvatar" />
  ) : (
    <BackgroundName>
      <UserNameIcon>{getInitials(userName)}</UserNameIcon>
    </BackgroundName>
  );

  return (
    <UserInfoWrapper>
      <UserName>{getFirstName(name)}</UserName>
      <UserAvatar>{displayName}</UserAvatar>
    </UserInfoWrapper>
  );
};

export default UserInfo;
