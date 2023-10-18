import { MoonSVG,SunSVG,ThemeButton } from "./ThemeToggler.styled"
import { useSelector, useDispatch } from 'react-redux';

import { selectTheme, toggleTheme } from "../../../redux/theme/themeSlice";


const ThemeToggler = () => {
  
    const isDarkMode = useSelector(selectTheme);
    const dispatch = useDispatch();
  
    const handleThemeChange = () => {
      dispatch(toggleTheme());
    };
  
  return (
     <ThemeButton onClick={handleThemeChange}>{isDarkMode?<MoonSVG/>:<SunSVG/>}</ThemeButton>
  
  )
}

export default ThemeToggler
