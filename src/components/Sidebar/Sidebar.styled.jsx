import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  ul,
  li {
    text-decoration: none;
  }

  .logo {
    display: flex;
    align-items: center;
    margin-bottom: 32px;
    margin-top: 32px;
    margin-left: 24px;
    margin-right: 43px;

    body {
      border-right: 1px solid rgba(220, 227, 229, 0.5);

      background: #fff;
    }

    p {
      color: #3e85f3;
      font-family: 'Inter', sans-serif;
      font-size: 24px;
      font-style: italic;
      font-weight: 700;
      line-height: 24px;
      margin-left: 8px;
    }
  }
  .user-panel {
    color: rgba(52, 52, 52, 0.5);

    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-bottom: 32px;
  }
  .menu {
    margin-left: 24px;
    margin-right: 24px;
    .panel-instrument {
      display: flex;
      color: rgba(52, 52, 52, 0.5);
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      width: 241px;
      height: 56px;
      padding: 16px 165px 16px 20px;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
      border-radius: 8px;
      margin-bottom: 16px;
      transition: all 0.3s;
    }
    .panel-instrument:hover,
    .panel-instrument:focus {
      color: #3e85f3;
      border-radius: 8px;
      background: #e3f3ff;
    }
    ul {
      li {
        svg path {
          transition: all 0.3s;
        }
        &:hover {
          svg path {
            stroke: #3e85f3;
          }
        }
      }
      a {
        text-decoration: none;
      }
      button {
        margin-top: 423px;
        margin-left: 16px;
        margin-right: 16px;
        margin-bottom: 24px;
        width: 141px;
        height: 56px;
        flex-shrink: 0;
        border-radius: 16px;
        background: #3e85f3;
        color: #fff;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        letter-spacing: -0.36px;
        border: 0;
        box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
        transition: all 0.3s;
      }
      button:hover,
      button:focus {
        border-radius: 16px;
        background: #2b78ef;

        box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
      }
    }
  }
`;
