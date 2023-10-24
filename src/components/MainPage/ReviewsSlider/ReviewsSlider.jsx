// Illia Shatokhin

import Slider from './Slider/Slider';
import { Container } from '../../../Styles/Container.styled';
import { ReviewsWrapper, Title } from './ReviewsSlider.styled';
import { useFetchReviewsQuery } from '../../../redux/reviews/reviewsApi';
import Loader from '../../MainLayout/Loader/Loader';

const ReviewsSlider = () => {
  const { data: reviews, isFetching } = useFetchReviewsQuery();

  return (
    <ReviewsWrapper>
      <Container>
        <Title>Reviews</Title>
        {isFetching && (< Loader />)}
        {reviews && <Slider reviews={reviews.data} />}
      </Container>
    </ReviewsWrapper>
  );
}

export default ReviewsSlider