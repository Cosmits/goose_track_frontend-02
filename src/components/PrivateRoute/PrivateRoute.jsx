import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectRegistered } from 'redux/selectors';


const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const registered = useSelector(selectRegistered);

  return registered ? children : <Navigate to={redirectTo} />;
};


PrivateRoute.propTypes = {
  children: PropTypes.any,
  redirectTo: PropTypes.string,
};

export default PrivateRoute;