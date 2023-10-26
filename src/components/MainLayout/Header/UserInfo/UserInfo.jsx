
import { useSelector } from 'react-redux';
import {
  BackgroundName,
  UserAvatar,
  UserInfoWrapper,
  UserName,
  UserNameIcon,
} from './UserInfo.styled';
import { selectUser } from '../../../../redux/auth/selectors';
import { useEffect } from 'react';

import { useState } from 'react';
import { imageExists } from '../../../../hooks/useImageExists';


const UserInfo = () => {
  const { userName, avatarURL } = useSelector(selectUser);
  const [newAvatar, setNewAvatar] = useState(avatarURL ?? '');

  useEffect(() => {
    function checkImg() { 
      imageExists(avatarURL).then(function (exists) {
        if (!exists) setNewAvatar('')
        else setNewAvatar(avatarURL)
      });
    }
    checkImg()
  }, [avatarURL])

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

  const displayName = newAvatar ? (
    <img src={newAvatar} alt="UserAvatar" />
  ) : (
    <BackgroundName>
      <UserNameIcon>{getInitials(userName)}</UserNameIcon>
    </BackgroundName>
  );

  return (
    <UserInfoWrapper>
      <UserName>{getFirstName(userName)}</UserName>
      <UserAvatar>{displayName}</UserAvatar>
    </UserInfoWrapper>
  );
};

export default UserInfo;
