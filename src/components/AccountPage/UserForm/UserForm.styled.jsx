import { AiFillPlusCircle } from 'react-icons/ai';
import userSvg from '../../../../src/icons/popUp/user.svg';
import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 60px 18px 40px;
  background-color: ${({ theme }) => theme.secondaryBgColor};

  border-radius: 16px;
  text-align: center;
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 40px 0;
  }

  @media screen and (min-width: 1440px) {
     padding: 60px 0; 
    height: 100%;
  }
`;

export const UserName = styled.h2`
  color: var(--calendar-date-color);
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  margin-bottom: 5px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--main-blue);

  @media screen and (min-width: 768px) {
    width: 124px;
    height: 124px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 72px;
  height: 72px;
  margin-bottom: 18px;

  background-color: var(--main-background-color);
  border-radius: 50%;

  transition: all 0.5s;

  &:hover,
  &:focus {
    scale: 1.1;
  }

  @media screen and (max-width: 767px) {
    position: absolute;
    top: -31px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (min-width: 768px) {
    position: relative;
    width: 124px;
    height: 124px;
    margin-bottom: 20px;
  }
`;

export const IconContainer = styled(AiFillPlusCircle)`
  position: absolute;
  bottom: -3px;
  right: 12px;
  background-color: var(--white);
  border-radius: 50%;
  width: 14px;
  height: 14px;
  justify-content: center;
  align-items: center;
  display: flex;
  color: var(--main-blue);

  cursor: pointer;
  @media screen and (min-width: 375px) and (max-width: 767px) {
  }

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    right: 18px;
    bottom: -4px;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
      width: 354px;
  }

  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: auto;
    /* grid-template-columns: repeat(2, 1fr);
    align-items: start;
    justify-items: center;
    flex: 1; */

    grid-column-gap: 50px;
    grid-row-gap: 24px;
  }
`;

export const Text = styled.p`
  color: var(--calendar-date-color);
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Letter = styled.p`
  color: var(--accent-color);
  font-weight: 700;
  font-size: 33px;
  line-height: 1.28;

  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`;

export const Forma = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;

  & > div > div {
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
      gap: 18px;
    }

    @media screen and (min-width: 768px) {
      gap: 24px;
    }
  }

  & > div > div:nth-of-type(1) {
    margin-bottom: 18px;

    @media screen and (min-width: 768px) {
      margin-bottom: 24px;
    }
  } 


  & > div > div > label {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  & > div > div > label > input,
  .react-phone-input {
    width: 100% !important;
    height: 42px !important;
    border-radius: 8px !important;
    border: 1px solid ${({ theme }) => theme.borderInputColor} ;
    padding: 12px 14px;
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    color: var(--calendar-date-color);
    outline: none;
    background-color: inherit;

    & > div {
      background-color: inherit;
    }

    &::placeholder {
      color: ${({ theme }) => theme.borderInputColor};
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      font-weight: 400;
    }

    &:hover,
    &:focus {
      border-color: var(--black);
      background-color: inherit !important;  
    }


    @media screen and (min-width: 1440px) {
      width: 354px !important;
      height: 46px !important;
    }
  }

  .valid-phone-number {
    border-color: var(--correct-color) !important;
    background-color: inherit !important;
    border-radius: 8px;
  }

  .invalid-phone-number {
    border-color: var(--error-color) !important;
    background-color: inherit !important;
    border-radius: 8px;
  }
  .react-tel-input .flag-dropdown,
  .flag-dropdown,
  .react-tel-input .form-control:focus,
  .react-tel-input .flag-dropdown.open .selected-flag {
    border-radius: 8px 0 0 8px !important;
  }
  
  .selected-flag,
  .selected-flag:hover,
  .selected-flag:focus {
    background-color: inherit !important;  
  }


  
  & > div > div > label > p {
    color: ${({ theme }) => theme.labelTextColor};
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 8px;
    
    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
  }

  & > div > div > div > label {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  & > div > div > div > label > input {
    width: 100%;
    height: 42px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.borderInputColor};
    padding: 12px 14px;
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    color: var(--calendar-date-color);
    outline: none;
    background-color: inherit;

    &::placeholder {
      color: ${({ theme }) => theme.borderInputColor};
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      font-weight: 400;
    }
    &:hover,
    &:focus {
      border-color: var(--black);
    }

    @media screen and (min-width: 1440px) {
      width: 354px;
      height: 46px;
    }
  }

  & > div > div > div > label > p {
    color: ${({ theme }) => theme.labelTextColor};
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 8px;
    
    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
  }

.email-input-disabled {
  cursor: not-allowed;
  background-color: ${({ theme }) => theme.borderInputColor};
}
`;


export const Button = styled.button`
  max-width: 195px;
  height: 46px;
  border-radius: 16px;
  background-color: var(--main-blue, #3e85f3);
  border: none;
  padding: 14px 50px;
  color: var(--white);
  font-family: 'InterSemiBold';
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  cursor: pointer;
  outline: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: var(--hover-blue);
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }
  &:disabled {
    background-color: #3e85f380;
    cursor: not-allowed;
  }

  @media screen and (min-width: 768px) {
    width: 262px;
    height: 48px;
    padding: 10px 20px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: auto;
    grid-column: span 2;
  }
`;

export const CustomInput = styled.input`
  width: 100%;
  height: 42px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.borderInputColor};
  padding: 12px 14px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  color: var(--calendar-date-color);
  outline: none;
  background-color: inherit;

  &::placeholder {
    color: ${({ theme }) => theme.borderInputColor};
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
  }

  &:hover,
  &:focus {
    border-color: var(--black);
  }

  @media screen and (min-width: 1440px) {
    width: 354px;
    height: 46px;
  }
`;

export const Avatar = styled.div`
  position: absolute;
  top: 6px;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--main-blue);
  background-color: ${({ theme }) => theme.secondaryBgColor};
  background-image: url(${userSvg});

  background-repeat: no-repeat;
  background-size: 50% 50%;
  background-position: center;
  margin-bottom: 0;
  @media screen and (min-width: 768px) {
    width: 124px;
    height: 124px;
  }
`

export const InputIcon = styled.img`
  position: absolute;
  bottom: 9px;
  right: 9px;
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    bottom: 10px;
  }
  
  @media screen and (min-width: 1440px) {
    right: 8px;
  }  
`

export const ButtonWrap = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 14px;
  flex-direction: column;

  @media screen and (min-width: 1440px) {
     flex-direction: row;
     gap: 220px;
  }

`

export const DeleteBtn = styled(Button)`
  max-width: 195px;
  height: 46px;
  background-color: transparent;
  width: auto;
  padding: 10px 30px;
  color: var(--error-color);

  &:hover{
    background-color:var(--error-color);
    color: var(--white);
  }
   
  @media screen and (min-width: 768px) {
    width: 262px;
    height: 48px;
    padding: 10px 20px;
  }

  @media screen and (min-width: 1440px) {
    grid-column: span 2;
  }
`