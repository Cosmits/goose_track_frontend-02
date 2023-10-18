// Illia Shatokhin

import { useEffect, useState } from 'react';

import reviewsApi from '../../../services/reviews-api';

import { Container } from '../../../Styles/Container';
import Slider from './Slider/Slider';
import { ReviewsWrapper, Title } from './ReviewsSlider.styled';
import { ColorRing } from 'react-loader-spinner';

export default function ReviewsSlider() {
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const response = await reviewsApi.fetchAllReviews();
        const { data } = response;
        setReviews(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log('error', error);
      }
    };

    fetch();
  }, []);

  return (
    <ReviewsWrapper>
      <Container>
        <Title>Reviews</Title>
        {loading && (
          <ColorRing
            visible={true}
            height="180"
            width="180"
            ariaLabel="blocks-loading"
            wrapperStyle={{
              width: '100%',
              margin: '0 auto',
            }}
            colors={['#13151A', '#3E85F3', '#DCEBF7', '#E74A3B', '#FFD2DD ']}
          />
        )}
        {reviews && <Slider reviews={reviews} />}
      </Container>
    </ReviewsWrapper>
  );
}
