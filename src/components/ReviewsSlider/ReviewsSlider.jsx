// Illia Shatokhin

import { useEffect, useState } from 'react';
import { Container } from '../../Styles/Container';
import Arrows from './Arrows/Arrows';
import { ReviewsWrapper, Title } from './ReviewsSlider.styled';
import Slider from './Slider/Slider';
import axios from 'axios';

// import { Header } from './ReviewsSlider.styled';

export default function ReviewsSlider() {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const a = async () => {
      const response = await axios.get(
        'https://goose-track-backend-02.onrender.com/reviews',
      );
      setReviews(response.data);
      console.log(response.data);
    };
    a();
  }, []);

  return (
    <Container>
      <ReviewsWrapper>
        <Title>Reviews</Title>
        <Slider />
        <Arrows />
      </ReviewsWrapper>
    </Container>
  );
}
