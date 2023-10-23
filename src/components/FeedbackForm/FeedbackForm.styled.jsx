import { VscEdit } from 'react-icons/vsc';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { CgClose } from 'react-icons/cg';
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const RatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const RatingLabel = styled.p`
  color: var(--black);
`;

export const TextAreaLabel = styled.label`
  display: flex;
  flex-direction: row;
  margin-top: 24px;
  align-items: center;
  justify-content: space-between;
  color: var(--black);
`;

export const TextArea = styled.textarea`
  margin-top: 8px;
  padding: 12px 14px;
  min-height: 130px;
  max-height: 330px;
  height: auto;
  resize: none;

  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 128%;

  border-radius: 8px;
  border-width: 0;
  color: #343434;
  background: #f6f6f6;
  border: 1px solid rgba(255, 255, 255, 0.15);
  outline: none;
`;

export const BtnWrapper = styled.div`
  margin-top: 18px;
  display: flex;
  gap: 8px;
`;

export const Btn = styled.button`
  width: 144px;
  height: 42px;
  color: ${(props) => (props.isActive ? 'var(--white)' : '#343434')};
  text-align: center;

  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 128%;

  border: none;
  border-radius: 8px;
  background-color: ${(props) =>
    props.isActive ? 'var(--main-blue)' : '#e5edfa'};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;
  &:hover {
    color: var(--white);
    background: var(--hover-blue);
  }

  @media screen and (max-width: 374px) {
    width: 120px;
  }

  @media screen and (min-width: 768px) {
    width: 198px;
    height: 48px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const EditIcon = styled(VscEdit)`
  display: flex;
  flex-direction: column;
  width: 30px;
  height: 30px;
  padding: 7px;
  justify-content: center;
  align-items: center;
  fill: var(--white);
  border-radius: 50px;
  background: var(--main-blue);
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }
`;

export const DeleteIcon = styled(RiDeleteBin6Line)`
  display: flex;
  flex-direction: column;
  width: 30px;
  height: 30px;
  padding: 7px;
  justify-content: center;
  align-items: center;
  fill: var(--high);
  background: rgba(234, 61, 101, 0.2);
  border-radius: 50px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }
`;

export const CloseBtn = styled(CgClose)`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 24px;
  height: 24px;

  color: var(--modal-close-icon);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  :hover {
    color: var(--accent);
  }

  @media screen and (min-width: 767px) {
    top: 18px;
    right: 18px;
  }
`;
