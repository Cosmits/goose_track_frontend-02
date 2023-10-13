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
      // Make an API request to log out the user on the backend.
      // If successful, clear user data and set the user as unauthenticated in the global state.
      // You can implement this part according to your backend and state management approach.
    } catch (error) {
      // Handle error and display a message to the user.
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
