import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BurgerMenu, HeaderCurrentPage, HeaderTask, HeaderUser, HeaderWrapper, LogoHeader, NoTaskTitle, NoTaskWrapper } from "./Header.styled";
import AddFeedbackBtn from "./FeedbackBtn/AddFeedbackBtn";
import ThemeToggler from "./ThemeToggler/ThemeToggler";
import UserInfo from "./UserInfo/UserInfo";
import AddFeedbackModal from "../../ModalPages/AddFeedbackModal/AddFeedbackModal";
import { useGetMonthlyTasksQuery } from "../../../redux/tasks/tasksApi";
import { useScreenSize } from "hooks/useScreenSize";
import logoHeader from 'images/header/logoHeader.png';

const Header = ({ openSideBar }) => {
  const { isDesktop } = useScreenSize();
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState('');
  const [tasks, setTasks] = useState([])

  const location = useLocation();
  
  const toggleModal = () => {
    setShowModal(!showModal);
    document.body.style.overflow = 'hidden';

    //disable scrolling
    if (showModal) { document.body.style.overflow = 'hidden' }
    else { document.body.style.overflow = 'auto' }
  };

  const path = location.pathname;
  const [, , , date] = path.split('/');
  const { data } = useGetMonthlyTasksQuery(date, {
    skip: date === undefined,
  });

  useEffect(() => {
    if (data) setTasks(data.data)
  }, [data])

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
      {isDesktop && (
        isDayPage && tasks.length > 0 ? (
          <NoTaskWrapper>
            <LogoHeader src={logoHeader} alt="LogoHeader" />
            <div>
              <HeaderCurrentPage>{currentPage}</HeaderCurrentPage>
              <NoTaskTitle>
                <HeaderTask>Let go</HeaderTask> of the past and focus on the present!
              </NoTaskTitle>
            </div>
          </NoTaskWrapper>
        ) : (
          <HeaderCurrentPage>{currentPage}</HeaderCurrentPage>
        )
      )}

      {!isDesktop && <BurgerMenu onClick={openSideBar} />}
      <HeaderUser>
        <AddFeedbackBtn openModal={toggleModal} />
        <ThemeToggler />
        <Link to="/account">
          <UserInfo />
        </Link>{' '}
      </HeaderUser>
      {showModal && <AddFeedbackModal onClose={toggleModal} />}
    </HeaderWrapper>
  );
};

export default Header;
