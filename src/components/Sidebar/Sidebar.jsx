// Sidebar.jsx
import {
  SidebarContainer,
  Logo,
  UserNav,
  Menu,
  LogoutBtn,
} from './Sidebar.styled';

function Sidebar() {
  const handleLogout = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('User logged out successfully.');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  return (
    <SidebarContainer>
      <Logo>
        <img src="logo.png" alt="GooseTrack Logo" />
      </Logo>
      <UserNav />
      <Menu>
        <ul>
          <li>My account</li>
          <li>Calendar</li>
          <li>Statistics</li>
          <li>
            <LogoutBtn onClick={handleLogout}>Log Out</LogoutBtn>
          </li>
        </ul>
      </Menu>
    </SidebarContainer>
  );
}

export default Sidebar;
