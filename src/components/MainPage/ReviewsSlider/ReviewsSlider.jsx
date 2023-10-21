// Illia Shatokhin

import { ColorRing } from 'react-loader-spinner';

import Slider from './Slider/Slider';
import { Container } from '../../../Styles/Container.styled';
import { ReviewsWrapper, Title } from './ReviewsSlider.styled';
import { useFetchReviewsQuery } from '../../../redux/reviews/reviewsApi';

export const ReviewsSlider = () => {
   const { data: reviews, isFetching } = useFetchReviewsQuery();

   return (
    <ReviewsWrapper>
      <Container>
        <Title>Reviews</Title>
        {isFetching && (
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
        {reviews && <Slider reviews={reviews.data} />}
      </Container>
    </ReviewsWrapper>
  );
}
