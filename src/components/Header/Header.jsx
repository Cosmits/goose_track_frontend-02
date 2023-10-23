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
import { useGetMonthlyTasksQuery } from '../../redux/tasks/tasksApi';

const Header = ({ openSideBar }) => {
  const { isDesktop } = useScreenSize();
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState('');
  const [tasks, setTasks] = useState([])

  const location = useLocation();
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const path = location.pathname;
  const [, , , date] = path.split('/');
  const { data } = useGetMonthlyTasksQuery(date, {
    skip: date === undefined,
  });
  useEffect(()=>{
    if (data) {
      console.log(data.data)
      setTasks(data.data)
        }
  },[data])
  

  const isDayPage = path.includes('/calendar/day');

  useEffect(() => {
    const currentPage = path.split('/')[1];

    switch (currentPage) {
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
  }, [path]);

  return (
    <HeaderWrapper>
      {(isDesktop && tasks.length>0) &&(
        <HeaderCurrentPage>{currentPage}</HeaderCurrentPage>
      )}
      {(isDesktop && isDayPage && tasks.length===0) && (
        <NoTaskWrapper>
          <LogoHeader src={logoHeader} alt="LogoHeader" />
          <div>
            <HeaderCurrentPage>{currentPage}</HeaderCurrentPage>
            <NoTaskTitle>
              <HeaderTask>Let go</HeaderTask> of the past and focus on the
              present!
            </NoTaskTitle>
          </div>
        </NoTaskWrapper>
      )}

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
