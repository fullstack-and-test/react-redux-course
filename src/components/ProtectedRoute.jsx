import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ isAuth, children }) => {
  const location = useLocation();

  if (!isAuth)
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;

  return children;
};

export default ProtectedRoute;
