// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';

import { Link, useLocation } from 'react-router-dom';
import UserInfo from './UserInfo/UserInfo';
import ThemeToggler from './ThemeToggler/ThemeToggler';
import {
  BurgerMenu,
  HeaderCurrentPage,
  HeaderTask,
  HeaderUser,
  HeaderWrapper,
  LogoHeader,
  NoTaskTitle,
  NoTaskWrapper,
  
} from './Header.styled';
import logoHeader from '../../images/header/logoHeader.png';
import AddFeedbackBtn from './FeedbackBtn/AddFeedbackBtn';
import { useScreenSize } from '../../hooks/useScreenSize';
import AddFeedbackModal from '../AddFeedbackModal/AddFeedbackModal';
import { useEffect, useState } from 'react';

const Header = ({ openSideBar }) => {
  const { isDesktop } = useScreenSize();
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState('');

  const location = useLocation()
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const path = location.pathname.split("/")[1];
       
    switch (path) {
      case 'account':
        setCurrentPage('User Profile');
        break;
      case 'calendar':
        setCurrentPage('Calendar');
        break;
      case 'statistics':
        setCurrentPage('Statistics');
        break;
      default:
        setCurrentPage('User Profile');
    }
  }, [location.pathname]);

  return (
    <HeaderWrapper>
      {isDesktop  && 
      <NoTaskWrapper>
      <LogoHeader src={logoHeader} alt="LogoHeader"/>
      <div>
        <HeaderCurrentPage>{currentPage}</HeaderCurrentPage>
        <NoTaskTitle><HeaderTask>Let go</HeaderTask> of the past and focus on the present!</NoTaskTitle>
        </div></NoTaskWrapper>}
       {/* {isDesktop && <HeaderCurrentPage>{currentPage}</HeaderCurrentPage>} */}
      {/* {(isDesktop & currentPage==="calendar/day") && <LogoHeader/>} */}
      
      {!isDesktop && <BurgerMenu onClick={openSideBar} />}
      <HeaderUser>
        <AddFeedbackBtn openModal={openModal} />
        <ThemeToggler />
        <Link to="/account">
          <UserInfo />
        </Link>{' '}
      </HeaderUser>
      {showModal && <AddFeedbackModal onClose={closeModal} />}
    </HeaderWrapper>
  );
};

export default Header;
