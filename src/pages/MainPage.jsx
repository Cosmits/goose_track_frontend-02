
import { Auth } from "../components/MainPage/authSection/auth";
import { Description } from "../components/MainPage/Description/Description";
import ReviewsSlider from '../components/MainPage/ReviewsSlider/ReviewsSlider';

const MainPage = () => {
  return (
    <>
      <Auth />
      <Description />
      <ReviewsSlider />
    </>
  );
};

export default MainPage;
