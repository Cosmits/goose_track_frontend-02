// import { useSelector } from 'react-redux';
// import { selectUserData } from 'redux/selectors';

import { useSelector } from 'react-redux';
import {
 
  UserAvatar,
  UserInfoWrapper,
  UserName,
  } from './UserInfo.styled';
import { selectUser } from '../../../redux/auth/selectors';

const UserInfo = () => {
   const {userName, avatarURL} = useSelector(selectUser);

  
    return (
    <UserInfoWrapper>
      <UserName>{userName}</UserName>
      <UserAvatar><img src={avatarURL} alt="Avatar"/></UserAvatar>
    </UserInfoWrapper>
  );
};

export default UserInfo;
