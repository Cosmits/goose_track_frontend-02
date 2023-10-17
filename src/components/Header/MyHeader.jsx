// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';

import { Link, useLocation } from 'react-router-dom';
import UserInfo from './UserInfo/UserInfo';
import ThemeToggler from './ThemeToggler/ThemeToggler';
import { BurgerMenu, HeaderCurrentPage, HeaderUser, HeaderWrapper } from './MyHeader.styled';
import AddFeedbackBtn from './FeedbackBtn/AddFeedbackBtn';
import { useScreenSize } from '../../hooks/useScreenSize';
import AddFeedbackModal from '../AddFeedbackModal/AddFeedbackModal';
import { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';


const MyHeader = () => {
  const {isDesktop} = useScreenSize();
  const [showModal, setShowModal] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const [currentPage, setCurrentPage] = useState("");

  const location = useLocation()
console.log(location)
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
 const toggleSideBar = () => {
  setShowSideBar(() => !showSideBar);

 }

 useEffect(() => {
  const path = location.pathname;
  switch (path) {
    case '/calendar':
      setCurrentPage('Calendar');
      break;
    case '/statistics':
      setCurrentPage('Statistics');
      break;
    default:
      setCurrentPage('User Profile');
  }
}, [location.pathname]);

  return (
    <HeaderWrapper>
      {isDesktop&&<HeaderCurrentPage>{currentPage}</HeaderCurrentPage>}
      {!isDesktop && <BurgerMenu onClick={toggleSideBar}/>}
      <HeaderUser>
      <AddFeedbackBtn openModal={openModal}/>
      <ThemeToggler/>
            <Link to="/account">
        <UserInfo />
      </Link>      </HeaderUser>
      {showModal &&  <AddFeedbackModal onClose={closeModal} />}
      {showSideBar && <Sidebar/>}
    </HeaderWrapper>
     
  );
};

export default MyHeader;
