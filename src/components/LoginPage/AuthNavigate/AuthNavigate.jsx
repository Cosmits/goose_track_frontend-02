// Yulia

import { AuthNavLink } from "./AuthNavigate.styled";

const AuthNavigate = ({route, textContent}) => {
       return <AuthNavLink to={route}>{textContent}</AuthNavLink>
};

export default AuthNavigate;
