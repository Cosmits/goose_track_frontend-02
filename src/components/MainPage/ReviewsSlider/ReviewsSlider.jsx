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
        {isFetching && (
          <>
            < Loader />
            <h2 style={{
              marginTop: "160px",
              textAlign: "center",
              position: 'absolute',
              top: 150,
              left: 30,
              minWidth: '90%',
              margin: '0 auto',
              zIndex: 1,
            }} > Please wait, BackEnd https://goose-track-backend-02.onrender.com now is not ready ... </h2>
          </>
        )}
        {reviews && <Slider reviews={reviews.data} />}
      </Container>
    </ReviewsWrapper>
  );
}

export default ReviewsSlider