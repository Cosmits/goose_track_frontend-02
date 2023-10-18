// Illia Shatokhin

import { useEffect, useState } from 'react';

import reviewsApi from '../../services/reviews-api';

import { Container } from '../../Styles/Container';
import Arrows from './Arrows/Arrows';
import Slider from './Slider/Slider';
import { ReviewsWrapper, Title } from './ReviewsSlider.styled';

export default function ReviewsSlider() {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await reviewsApi.fetchAllReviews();
        const { data } = response;
        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, []);

  return (
    <ReviewsWrapper>
      <Container>
        <Title>Reviews</Title>
        {reviews && <Slider reviews={reviews} />}
        <Arrows />
      </Container>
    </ReviewsWrapper>
  );
}