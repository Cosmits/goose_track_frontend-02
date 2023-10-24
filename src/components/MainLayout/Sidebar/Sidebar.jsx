import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/');

  };
  const { closeSideBar, open } = props;
  const location = useLocation();
 
  return (
    <SidebarWrapper className={open ? 'is-open' : ''}>
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
              <Link className={`panel-instrument ${location.pathname.startsWith('/account') ? 'active' : ''}`}
                to="/account" onClick={closeSideBar}>
                <MyAccountIcon />
                My Account
              </Link>
            </li>
            <li>
              <Link className={`panel-instrument ${location.pathname.startsWith('/calendar') ? 'active' : ''}`}
                to="/calendar" onClick={closeSideBar}>
                <CalendarIcon />
                Calendar
              </Link>
            </li>
            <li>
              <Link className={`panel-instrument ${location.pathname.startsWith('/statistics') ? 'active' : ''}`}
                to="/statistics" onClick={closeSideBar}>
                <StatisticsIcon />
                Statistics
              </Link>
            </li>
            <div>
              <button className="logout-button" onClick={handleLogout}>
                <p className="logout-text">Log Out</p>{' '}
                <LogOutIcon />
              </button>
            </div>
          </ul>
        </div>
      </div>
    </SidebarWrapper>
  );
}

export default Sidebar;
