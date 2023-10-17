import ReviewCard from '../ReviewCard/ReviewCard';
import { SliderWrapper } from './Slider.styled';

export default function Slider({ reviews }) {
  return (
    <SliderWrapper>
      <ReviewCard
        name="Yazva"
        rating={4}
        comment="GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended."
      />
    </SliderWrapper>
  );
}
