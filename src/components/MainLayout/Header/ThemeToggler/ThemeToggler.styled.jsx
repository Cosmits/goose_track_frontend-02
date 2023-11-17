import { ReactComponent as Moon } from '../../../../images/header/moon.svg';
import { ReactComponent as Sun } from '../../../../images/header/sun.svg';
import styled from 'styled-components';

export const MoonSVG = styled(Moon)`
height:24px;
width:24px;
margin-right:8px;
 @media (min-width: 768px){
height:32px;
width:32px;
margin-right:14px;
 }`

export const SunSVG = styled(Sun)`
height:24px;
width:24px;
 @media (min-width: 768px){
height:32px;
width:32px;
margin-right:14px;
 }`
export const ThemeButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  transition: opacity 0.3s ease;
 
`
