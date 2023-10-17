import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/selectors.js';

const PrivateRoute = ({ children, redirectTo = '/login', }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};

PrivateRoute.PropTypes = {
  children: PropTypes.any,
  redirectTo: PropTypes.string,
};

export default PrivateRoute