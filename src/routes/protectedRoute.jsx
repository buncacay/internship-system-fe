import { Navigate } from "react-router-dom";
import { PATHS } from "../constants/path";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return <Navigate to={PATHS.LOGIN} replace />;
  }

  return children;
};

export default ProtectedRoute;