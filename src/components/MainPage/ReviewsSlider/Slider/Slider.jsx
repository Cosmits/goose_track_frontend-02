import PropTypes from 'prop-types';

import 'react-multi-carousel/lib/styles.css'; //documentation: https://www.npmjs.com/package/react-multi-carousel
import Carousel from 'react-multi-carousel'; //documentation: https://www.npmjs.com/package/react-multi-carousel

import ReviewCard from '../ReviewCard/ReviewCard';
import Arrows from '../Arrows/Arrows';

const responsive = {
  tablet: {
    breakpoint: { max: 5000, min: 1440 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 1439, min: 0 },
    items: 1,
  },
};

export default function Slider({ reviews }) {
  return (
    <>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3500}
        customTransition="transform 1500ms ease-in-out"
        transitionDuration={2000}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<Arrows />}
      >
        {reviews.map((review) => {
          const { owner, rating, comment } = review;

          return (
            <ReviewCard
              key={owner?._id}
              avatar={owner?.avatarURL}
              name={owner?.userName}
              rating={rating}
              comment={comment}
            />
          );
        })}
      </Carousel>
    </>
  );
}

Slider.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
};
