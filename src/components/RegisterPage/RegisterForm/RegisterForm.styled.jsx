import styled from 'styled-components';
import { Field } from 'formik';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

export const Title = styled.h1`
  margin-bottom: 32px;
  color: var(--main-blue);
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
  color: var(--black);
  font-size: 12px;
  font-family:InterSemiBold;
  line-height: 1.21;
  color: ${props => props.className === 'error' ? 'var(--error-color)' : props.className === 'success' ? 'var(--correct-color)' : 'var(--black)'};

 @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Input = styled(Field)`
  border: 1px solid var(--input-gray);
  border-radius: 8px;
  padding: 14px;
  font-size: 14px;
  font-family:InterTightRegular;
  line-height: 1.29;
  background-color:var(--white) !important;
  border-color: ${props => props.className === 'error' ? 'var(--error-color)' : props.className === 'success' ? 'var(--correct-color)' : ''};
  
  &::placeholder {
    color: var(--input-gray);
    background-color:var(--white) !important;
  } 

   &:hover,
   &:focus,
   :active {
    border-color: var(--black);
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
  background-color: var(--main-blue);
  border: none;
  cursor: pointer;
  color: var(--white);
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
    background-color: var(--hover-blue);
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
  color: var(--error-color);

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
  fill: var(--main-blue);
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
export const ShowIcon = styled(AiFillEyeInvisible)`
  fill: var(--main-blue);
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const VerifyEmailInput = styled.li`
  display:flex;
  flex-direction:column;
  margin-bottom: 32px;
  margin-top:32px;
  position:relative;

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
    margin-top:40px;
  }
`;

