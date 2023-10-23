import styled from 'styled-components';
import { VscEdit } from 'react-icons/vsc';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { CgClose } from 'react-icons/cg';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const RatingLabel = styled.p`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.formLabelColor};
  font-family: InterTightMedium;
  font-size: 12px;
  line-height: 1.17;
`;

export const RatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const TextAreaLabel = styled.label`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.formLabelColor};
  font-family: InterTightMedium;
  font-size: 12px;
  line-height: 1.17;
`;

export const TextArea = styled.textarea`
  padding: 14px 18px;
  margin-bottom: 18px;
  min-height: 130px;
  height: auto;
  resize: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.secondaryTextColor};
  background: ${({ theme }) => theme.textAreaBgColor};
  border: 1px solid rgba(255, 255, 255, 0.15);
  outline: none;
  font-family: InterSemiBold;
  font-size: 14px;
  line-height: 1.28;

  &::placeholder {
    color: ${({ theme }) => theme.secondaryTextColor};
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const Btn = styled.button`
  width: 144px;
  height: 42px;
  text-align: center;
  border-radius: 8px;
  border: none;

  color: ${(props) =>
    props.isActive
      ? 'props.theme.activeBtnTextColor'
      : ' props.theme.inactiveBtnTextColor'};

  background-color: ${(props) =>
    props.isActive
      ? 'props.theme.activeBtnBgColor'
      : 'props.theme.inactiveBtnBgColor'};

  font-family: InterSemiBold;
  font-size: 14px;
  line-height: 1.28;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    color: var(--white);
    background: var(--hover-blue);
  }

  @media screen and (max-width: 374px) {
    width: 90%;
    max-width: 144px;
    height: 42px;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 90%;
    max-width: 198px;
    height: 48px;
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
