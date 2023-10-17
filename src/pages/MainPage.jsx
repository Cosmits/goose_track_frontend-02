import ReviewsSlider from '../components/MainPage/ReviewsSlider/ReviewsSlider';
// import LoginForm from "components/LoginForm/LoginForm";

import { Auth } from "../components/authSection/auth";
import { Description } from "../components/Description/Description";
import ReviewsSlider from "../components/ReviewsSlider/ReviewsSlider";

const MainPage = () => {
  return <>
    <Auth />
    <Description />
    <ReviewsSlider />
  </>
};

export default MainPage;
