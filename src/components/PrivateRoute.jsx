import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/selectors.js';

const PrivateRoute = ({ component, redirectTo = '/login', }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? component : <Navigate to={redirectTo} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.any,
  redirectTo: PropTypes.string,
};

export default PrivateRoute