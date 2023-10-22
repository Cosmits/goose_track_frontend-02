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

   const getFirstName = (userName) => {
    if (userName) {
      return userName.split(' ')[0];
    } else {
      return userName;
    }
  };
  
    return (
    <UserInfoWrapper>
      <UserName>{getFirstName(userName)}</UserName>
      <UserAvatar><img src={avatarURL} alt="Avatar"/></UserAvatar>
    </UserInfoWrapper>
  );
};

export default UserInfo;
