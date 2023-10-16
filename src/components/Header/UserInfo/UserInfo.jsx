// import { useSelector } from 'react-redux';
// import { selectUserData } from 'redux/selectors';

import {
  BackgroundName,
  UserAvatar,
  UserInfoWrapper,
  UserName,
  UserNameIcon,
} from './UserInfo.styled';

const UserInfo = () => {
  const name = 'Daryna Merkulova';
  const avatar = '';
  // const {name, avatar} = useSelector(selectUserData);

  const getInitials = (name) => {
    if (name) {
      const initials = name
        .split(' ')
        .map((word) => word.charAt(0))
        .join('')
        .toUpperCase();
      return initials;
    } else {
      return name;
    }
  };

  const getFirstName = (name) => {
    if (name) {
      return name.split(' ')[0];
    } else {
      return name;
    }
  };

  const displayName = avatar ? (
    <img src={avatar} alt="UserAvatar" />
  ) : (
    <BackgroundName>
      <UserNameIcon>{getInitials(name)}</UserNameIcon>
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
