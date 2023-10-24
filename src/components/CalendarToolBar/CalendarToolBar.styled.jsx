import { createGlobalStyle } from "styled-components";

export const ToolBarGlobalStyles = createGlobalStyle`
  .datepicker-container {
    display: flex;
    justify-content: space-between;
  }

  .navigation-btns button {
    width: 82px;
    font-family: inherit;
    font-size: 16px;
    padding: 8px;
    color: #3E85F3;
    background-color: ${({ theme }) => theme.navBtnBgColor};
    transition: .3s all ease;
  }

  .navigation-btns button:nth-of-type(1) {
    border-right: 1px solid rgba(62, 133, 243, .2);
    border-radius: 8px 0 0 8px;
  }

  .navigation-btns button:nth-of-type(2) {
    border-radius: 0 8px 8px 0;
  }

  .navigation-btns button.active {
    color: ${({ theme }) => theme.navBtnColorActive};
    background-color: ${({ theme }) => theme.navBtnBgColorActive};
  }

  .navigation-btns button:focus,
  .navigation-btns button:hover {
    color: ${({ theme }) => theme.navBtnColorActive};
    background-color: ${({ theme }) => theme.navBtnBgColorActive};
  }

  @media (max-width: 767px) and (min-width: 375px) {
    .datepicker-container {
      flex-direction: column;
      margin-bottom: 24px;
    }

    .navigation-btns button {
      width: 76px;
      font-size: 14px;
    }
  }
`;