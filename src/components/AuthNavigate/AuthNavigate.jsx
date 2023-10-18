// Yulia

import { AuthNavLink } from "./AuthNavigate.styled";

const AuthNavigate = ({route, textContent}) => {
       return (
        <div>
                <AuthNavLink to={route}>{textContent}</AuthNavLink>
        </div>
    )
};

export default AuthNavigate;
