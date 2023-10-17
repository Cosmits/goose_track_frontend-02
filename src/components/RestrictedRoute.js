import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/selectors.js';

const RestrictedRoute = ({ children, redirectTo = '/calendar', }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : children;
};


RestrictedRoute.propTypes = {
  children: PropTypes.any,
  redirectTo: PropTypes.string,
};

export default RestrictedRoute