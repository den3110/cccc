import { Navigate } from "react-router-dom";

const AuthRoute = ({ element: Component, isAuthenticated, ...rest }) => {
  return isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default AuthRoute;
