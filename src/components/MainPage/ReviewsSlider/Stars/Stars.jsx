import PropTypes from 'prop-types';

import { Star, StarWrapper } from './Stars.styled';

export default function Stars({ rating }) {
  const ratingArr = [1, 2, 3, 4, 5];
  return (
    <StarWrapper>
      {ratingArr.map((rate) => (
        <Star key={rate} color={rate <= rating ? '#ffac33' : '#cec9c1'} />
      ))}
    </StarWrapper>
  );
}

Stars.propTypes = {
  rating: PropTypes.number,
};
