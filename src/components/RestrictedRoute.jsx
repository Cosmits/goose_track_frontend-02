import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/selectors.js';

const RestrictedRoute = ({ component, redirectTo = '/calendar', }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};


RestrictedRoute.propTypes = {
  component: PropTypes.any,
  redirectTo: PropTypes.string,
};

export default RestrictedRoute