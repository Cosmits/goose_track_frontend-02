import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import { SliderWrapper } from './Slider.styled';

export default function Slider({ reviews }) {
  return (
    <SliderWrapper>
      {reviews.map((review) => {
        const { owner, rating, comment } = review;
        return (
          <React.Fragment key={owner._id}>
            <ReviewCard
              avatar={owner.avatarURL}
              name={owner.userName}
              rating={rating}
              comment={comment}
            />
          </React.Fragment>
        );
      })}
    </SliderWrapper>
  );
}
