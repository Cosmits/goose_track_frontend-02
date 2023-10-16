// Illia Shatokhin

import Arrows from './Arrows/Arrows';
import { ReviewsSection, Title } from './ReviewsSlider.styled';
import Slider from './Slider/Slider';

// import { Header } from './ReviewsSlider.styled';

export default function ReviewsSlider() {
  return (
    <ReviewsSection>
      <Title>Reviews</Title>
      <Slider />
      <Arrows />
    </ReviewsSection>
  );
}
