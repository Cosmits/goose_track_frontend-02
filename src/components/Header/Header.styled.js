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