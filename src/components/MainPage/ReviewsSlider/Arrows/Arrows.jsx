import { ArrowsWrapper, LeftArrow, RightArrow } from './Arrows.styled';

export default function Arrows({ next, previous, goToSlide, ...rest }) {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <ArrowsWrapper>
      <LeftArrow
        className={currentSlide === 0 ? 'disable' : ''}
        onClick={() => previous()}
      />
      <RightArrow onClick={() => next()} />
    </ArrowsWrapper>
  );
}
