import { MoonSVG, SunSVG, ThemeButton } from './ThemeToggler.styled';
import { useSelector, useDispatch } from 'react-redux';

import { selectTheme, toggleTheme } from '../../../redux/theme/themeSlice';

const ThemeToggler = () => {
  const isThemeMode = useSelector(selectTheme);
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <ThemeButton onClick={handleThemeChange}>
      {isThemeMode === 'light' && <MoonSVG/>}
      {isThemeMode === 'dark' && <SunSVG />}
    </ThemeButton>
  );
};

export default ThemeToggler;
