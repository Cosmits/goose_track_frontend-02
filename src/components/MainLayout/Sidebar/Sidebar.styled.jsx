import styled from 'styled-components';

export const SidebarWrapper = styled.div`
 position: relative;
  font-family: 'InterSemiBold', sans-serif;
  width: 289px;
  height: 100vh;
  min-height: 480px;
  border-right: 1px solid rgba(220, 227, 229, 0.5);
  background: ${({ theme }) => theme.sideBarBG};
  color: ${({ theme }) => theme.mainSideBarText};
  transition: all 0.3s;

  

  ul,
  li {
    text-decoration: none;
  }

  .sidebar {
    margin-right: 24px;
    margin-left: 24px;
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    /* Other sidebar styles */

    /* Make the sidebar scrollable if its content overflows */
    overflow-y: auto;
  }
  body {
    border-right: 1px solid rgba(220, 227, 229, 0.5);
    background: #fff;
  }
  .logo-img {
    width: 71px;
  }
  .svg-nav {
    width: 24px;
    height: 24px;
  }
  .logo {
    display: flex;
    align-items: center;
    margin-bottom: 32px;

    .logo-text {
      color: ${({ theme }) => theme.sideBarLogoText};
      font-family: 'InterTightBold', sans-serif;
      font-size: 24px;
      font-weight: 700;
      line-height: 24px;
      margin-left: 8px;
    }
  }
  .close-btn {
    width: 34px;
    height: 34px;
    stroke: ${({ theme }) => theme.mainSideBarText};
  }
  .user-panel {
    color: ${({ theme }) => theme.mainSideBarText};
    font-family: 'InterSemiBold', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-bottom: 32px;
  }

  .menu {
    .panel-instrument {
      display: flex;
      color: ${({ theme }) => theme.mainSideBarText};
      font-family: 'InterSemiBold', sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      padding: 16px 16px 16px 20px;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
      border-radius: 8px;
      margin-bottom: 16px;
      transition: all 0.3s;
    }
    .panel-instrument.active .svg-nav path {
      stroke: ${({ theme }) => theme.sidebarHoverText};
    }

    .panel-instrument.active {
      color: ${({ theme }) => theme.sidebarHoverText};
      background: ${({ theme }) => theme.sidebarActiveBtnBG};
    }
    .svg-nav path {
      stroke: ${({ theme }) => theme.mainSideBarText};
    }
    .panel-instrument:hover,
    .panel-instrument:focus {
      color: ${({ theme }) => theme.sidebarHoverText};
      border-radius: 8px;
      background: ${({ theme }) => theme.sidebarActiveBtnBG};
    }
    ul {
      li {
        svg path {
          transition: all 0.3s;
        }
        &:hover {
          svg path {
            stroke: ${({ theme }) => theme.sidebarHoverText};
          }
        }
      }
      a {
        text-decoration: none;
      }
      button {
        cursor: pointer;
        position: absolute;
        bottom: 0;
        margin-right: 16px;
        margin-bottom: 24px;
        flex-shrink: 0;
        border-radius: 16px;
        background: #3e85f3;
        color: #fff;
        font-family: 'InterSemiBold', sans-serif;
        font-size: 18px;
        font-weight: 700;
        font-style: normal;
        letter-spacing: -0.36px;
        border: 0;
        box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
        transition: all 0.3s;
      }
      .bottom-button-container {
        position: fixed;
        bottom: 0;
        margin-top: auto;
      }
      button:hover,
      button:focus {
        border-radius: 16px;
        background: #2b78ef;

        box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
      }
      .logout-button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        padding-left: 23px;
        padding-top: 16px;
        padding-bottom: 16px;
        padding-right: 18px;
      }
      .logout-text {
        margin-right: 11px;
      }
    }
  }
  .logo-class {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .icon {
    display: none;
  }
  @media (max-width: 1439px) {
    
    height: 100vh;
     position: absolute; 
    transform: translateY(-100%);
    z-index: 3;
    &.is-open {
      transform: translateY(0%);
    }
    .logo-img {
      width: 60px;
    }
    .sidebar {
      margin-right: 32px;
      margin-left: 32px;
      margin-top: 24px;
    }
    .logo .logo-text {
      font-size: 16px;
    }
    .icon {
      display: block;
      background-color: transparent;
      color: black;
      font-size: 34px;
      border: none;
      cursor: pointer;
      margin-bottom: 25px;
    }
    .panel-instrument {
      a {
        padding-right: 70px;
      }
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    z-index: 3;
    .menu {
      .panel-instrument {
        font-size: 14px;
      }
    }
    .logo-img {
      width: 36px;
    }
    .close-btn {
      width: 24px;
      height: 24px;
    }
    .svg-nav {
      width: 20px;
      height: 20px;
    }
    .icon {
      margin-bottom: 31px;
    }
  }
`;
