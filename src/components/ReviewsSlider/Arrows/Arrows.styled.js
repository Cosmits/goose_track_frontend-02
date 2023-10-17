import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import styled from 'styled-components';

export const LeftArrow = styled(BsArrowLeft)`
  width: 50px;
  height: 50px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 61px;
    height: 61px;
  }
`;

export const RightArrow = styled(BsArrowRight)`
  width: 50px;
  height: 50px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 61px;
    height: 61px;
  }
`;

export const ArrowsWrapper = styled.div`
  display: flex;
  gap: 25px;
  justify-content: center;
`;
