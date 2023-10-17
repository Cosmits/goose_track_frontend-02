import { ReactComponent as ArrowLeft } from '../../../icons/ReviewsSlider/reviews-slider-left-arrow.svg';
import { ReactComponent as ArrowRight } from '../../../icons/ReviewsSlider/reviews-slider-right-arrow.svg';
import styled from 'styled-components';

export const LeftArrow = styled(ArrowLeft)`
  width: 50px;
  height: 50px;
  cursor: pointer;
  fill: #111111;

  &:hover {
    fill: #3e85f3;
  }

  @media screen and (min-width: 768px) {
    width: 61px;
    height: 61px;
  }
`;

export const RightArrow = styled(ArrowRight)`
  width: 50px;
  height: 50px;
  cursor: pointer;
  fill: #111111;

  &:hover {
    fill: #3e85f3;
  }

  @media screen and (min-width: 768px) {
    width: 61px;
    height: 61px;
  }
`;

export const ArrowsWrapper = styled.div`
  margin-top: 8px;
  position: relative;
  display: flex;
  gap: 25px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    margin-top: 18px;
  }
`;
