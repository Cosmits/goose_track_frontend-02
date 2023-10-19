
import { Auth } from "../components/authSection/auth";
import { Description } from "../components/MainPage/Description/Description";
import ReviewsSlider from '../components/MainPage/ReviewsSlider/ReviewsSlider';


const MainPage = () => {
  return <>
    <Auth />
    <Description />
    <ReviewsSlider />
  </>
};

export default MainPage;
