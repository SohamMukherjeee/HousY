// components/PrivateRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth(); // ✅ will no longer be undefined

  return currentUser ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
