import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useMemo } from "react";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  // Memoize the route to prevent unnecessary re-renders
  return useMemo(() => {
    return user ? children : <Navigate to="/" />;
  }, [user, children]);
};

export default PrivateRoute;
