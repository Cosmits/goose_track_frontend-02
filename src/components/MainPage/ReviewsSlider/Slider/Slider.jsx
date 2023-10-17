import React from 'react';

import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

import ReviewCard from '../ReviewCard/ReviewCard';
import { SliderWrapper } from './Slider.styled';
import Arrows from '../Arrows/Arrows';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 4000, min: 1440 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 1439, min: 0 },
    items: 1,
  },
};

export default function Slider({ reviews }) {
  return (
    <SliderWrapper>
      {reviews ? (
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          customTransition="transform 1500ms ease-in-out"
          transitionDuration={1500}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<Arrows />}
        >
          {reviews.map((review) => {
            const { owner, rating, comment } = review;
            return (
              <ReviewCard
                key={owner._id}
                avatar={owner.avatarURL}
                name={owner.userName}
                rating={rating}
                comment={comment}
              />
            );
          })}
        </Carousel>
      ) : (
        <p>Loading...</p>
      )}
    </SliderWrapper>
  );
}
