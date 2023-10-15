import { MoonSVG,ThemeButton } from "./ThemeToggler.styled"
// import { useSelector, useDispatch } from 'react-redux';
// import { toggleTheme } from './actions';


const ThemeToggler = () => {
  
    // const isDarkMode = useSelector(state => state.isDarkMode);
    // const dispatch = useDispatch();
  
    // const handleThemeChange = () => {
    //   dispatch(toggleTheme());
    // };
  
  return (
    //  <ThemeButton onClick={handleThemeChange}>{isDarkMode?<MoonSVG/>:<SunSVG/>}</ThemeButton>
     <ThemeButton ><MoonSVG/></ThemeButton>
  )
}

export default ThemeToggler
