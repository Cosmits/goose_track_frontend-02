import PropTypes from 'prop-types';

import { ArrowsWrapper, LeftArrow, RightArrow } from './Arrows.styled';

export default function Arrows({ next, previous }) {
  return (
    <ArrowsWrapper>
      <LeftArrow onClick={() => previous()} />
      <RightArrow onClick={() => next()} />
    </ArrowsWrapper>
  );
}

Arrows.propTypes = {
  next: PropTypes.func,
  previous: PropTypes.func,
};
