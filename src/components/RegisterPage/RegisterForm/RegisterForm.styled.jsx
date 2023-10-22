import styled from 'styled-components';
import { Field } from 'formik';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

export const Title = styled.h1`
  margin-bottom: 32px;
  color: #3E85F3;
  font-size: 18px;
  font-family:InterSemiBold;
  line-height: 1.33;
  
   @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 24px;
    line-height: 1;
  }
`;

export const List = styled.ul`
 margin-bottom: 32px;

 @media screen and (min-width: 768px) {
    margin-bottom: 48px;
  }
`;

export const InputWrap = styled.li`
  display:flex;
  flex-direction:column;
  margin-bottom: 24px;
  position:relative;

  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
  }
`;

export const Label = styled.label`
  margin-bottom: 8px;
  color: #111111;
  font-size: 12px;
  font-family:InterSemiBold;
  line-height: 1.21;
  color: ${props => props.className === 'error' ? '#ff0000' : props.className === 'success' ? '#3cbc81' : '#000'};

 @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Input = styled(Field)`
  border: 1px solid #DCE3E599;
  border-radius: 8px;
  padding: 14px;
  font-size: 14px;
  font-family:InterTightRegular;
  line-height: 1.29;
  background-color:#ffffff !important;
  border-color: ${props => props.className === 'error' ? '#ff0000' : props.className === 'success' ? '#3cbc81' : ''};
  
  &::placeholder {
    color: #DCE3E5;
    background-color:#ffffff !important;
  } 

   &:hover,
   &:focus,
   :active {
    border-color: #111111;
  }

  @media screen and (min-width: 768px) {
    padding: 18px;
    font-size: 16px;
    line-height: 1.13;
  }
`;


export const Icon = styled.img`
  position:absolute;
  right:14px;
  top:34px;
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    right:18px;
    top:40px;
  }
`;

export const Button = styled.button`
  display: flex;
  gap:11px;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 16px;
  background-color: #3E85F3;
  border: none;
  cursor: pointer;
  color: #ffffff;
  font-size: 14px;
  font-family:InterSemiBold;
  line-height: 1.29;
  transition: all 250ms linear;

  @media screen and (min-width: 768px) {
    padding-top: 18px;
    padding-bottom: 18px;
    font-size: 18px;
    line-height: 1.33;
  }

 &:focus,
  &:hover  {
    background-color: #2B78EF;
    box-shadow: 4px 2px 16px 0px #88A5BF7A;

  }
`;

export const LogInPicture = styled.img`
  width: 18px;
  height:18px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height:20px;
  }
`

export const Error = styled.p`
  margin-top:8px;
  margin-left:14px;
  font-size: 12px;
  font-family:InterTightRegular;
  line-height: 1.17;
  color: #ff0000;

   @media screen and (min-width: 768px) {
    margin-left:18px;
  }
`;

export const PasswordButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 38px;
  right: 14px;
  padding: 0;

   @media screen and (min-width: 768px) {
    right: 18px;
    top:42px;
  }
`;

export const DontShowIcon = styled(AiFillEye)`
  fill: #3E85F3;
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
export const ShowIcon = styled(AiFillEyeInvisible)`
  fill: #3E85F3;
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
