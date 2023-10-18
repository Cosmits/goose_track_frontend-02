import { RxHamburgerMenu } from "react-icons/rx";

import styled from "styled-components";

export const HeaderWrapper = styled.header`
display: flex;
align-items:center;
justify-content: space-between;
`
export const HeaderUser = styled.div `
display:flex;
`

export const BurgerMenu = styled(RxHamburgerMenu)`
width:34px;
height:34px;`

export const HeaderCurrentPage = styled.h2`
font-size:32px;
font-weight: 700;
line-height: 1;
`
export const NoTaskWrapper = styled.div`
display:flex;
align-items:center;
gap: 8px;`

export const NoTaskTitle = styled.p`
color: #111;
font-family: Inter;
font-size: 14px;
font-weight: 600;
line-height: 1.28;
margin-top:8px;
`
export const HeaderLink = styled.a`
color: #3E85F3;
font-family: Inter;
font-size: 14px;
font-weight: 600;
line-height: 1.28;
`
export const LogoHeader = styled.img`
width: 64px;
height: 60px;
`