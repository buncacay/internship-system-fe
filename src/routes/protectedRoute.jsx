import { Navigate } from "react-router-dom";
import { PATHS } from "../constants/path";
import { useAuthStore } from "../shares/state/authState";


export default function ProtectedRoute({ children }) {
  const token = useAuthStore((state) => state.accessToken);

  if (!token) {
    return <Navigate to={PATHS.HOME} replace />;
  }

  return children;
}