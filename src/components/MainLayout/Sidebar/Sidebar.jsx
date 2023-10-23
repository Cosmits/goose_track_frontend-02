import { Link, useLocation } from 'react-router-dom';
import { SidebarWrapper } from './Sidebar.styled';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/operations';
import sidebarLogo from '/src/images/goose_logo_desktop@1x.png';
import MyAccountIcon from '/src/icons/Sidebar/MyAccountIcon'; 
import CloseIcon from '../../../icons/Sidebar/CloseIcon';
import CalendarIcon from '../../../icons/Sidebar/CalendarIcon';
import StatisticsIcon from '../../../icons/Sidebar/StatisticsIcon';
import LogOutIcon from '../../../icons/Sidebar/LogOutIcon';

function Sidebar(props) {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  const { closeSideBar } = props;
  const location = useLocation();

  return (
    <SidebarWrapper>
      {/* <button id="open-burger">OPEN</button>*/}{' '}
      <div id="sidebar" className="sidebar">
        <div className="logo-class">
          <Link to="/account" className="logo">
            <img src={sidebarLogo} className="logo-img" alt="Sidebar Logo" />
            <p className="logo-text">GooseTrack</p>
          </Link>
          <button id="close-button" className="icon" onClick={closeSideBar}>
            <CloseIcon />
          </button>
        </div>
        <div className="menu">
          <h5 className="user-panel">User Panel</h5>
          <ul>
            <li>
              <Link
                className={`panel-instrument ${
                  location.pathname.startsWith('/account') ? 'active' : ''
                }`}
                to="/account"
              >
                <MyAccountIcon />
                My Account
              </Link>
            </li>
            <li>
              <Link
                className={`panel-instrument ${
                  location.pathname.startsWith('/calendar') ? 'active' : ''
                }`}
                to="/calendar"
              >
                <CalendarIcon />
                Calendar
              </Link>
            </li>
            <li>
              <Link
                className={`panel-instrument ${
                  location.pathname.startsWith('/statistics') ? 'active' : ''
                }`}
                to="/statistics"
              >
                <StatisticsIcon />
                Statistics
              </Link>
            </li>
            <div className="">
              <button className="logout-button" onClick={handleLogout}>
                <p className="logout-text">Log Out</p>{' '}
                <LogOutIcon/>
              </button>
            </div>
          </ul>
        </div>
      </div>
    </SidebarWrapper>
  );
}

export default Sidebar;
