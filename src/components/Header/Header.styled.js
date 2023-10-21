import { RxHamburgerMenu } from "react-icons/rx";

import styled from "styled-components";
import { GlobalStyle } from "../../Styles/GlobalStyles";

export const HeaderWrapper = styled.header`
display: flex;
align-items:center;
justify-content: space-between;
margin-bottom:64px;

@media screen and (min-width: 1440px){
margin-bottom:32px;
}

`
export const HeaderUser = styled.div `
display:flex;
`

export const BurgerMenu = styled(RxHamburgerMenu)`
width:34px;
height:34px;`

export const HeaderCurrentPage = styled.h2`
font-family: ${GlobalStyle.InterTightBold};
font-size:32px;
font-weight: 700;
line-height: 1;
`
export const NoTaskWrapper = styled.div`
display:flex;
align-items:center;
gap: 8px;`

export const NoTaskTitle = styled.p`
color: ${({ theme }) => theme.mainTextColor};
font-family: ${GlobalStyle.InterSemiBold};
font-size: 14px;
font-weight: 600;
line-height: 1.28;
margin-top:8px;
`
export const HeaderTask = styled.span`
color: #3E85F3;
font-family: inherit;
font-size: 14px;
font-weight: 600;
line-height: 1.28;
`
export const LogoHeader = styled.img`
width: 64px;
height: 60px;
`