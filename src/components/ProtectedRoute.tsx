import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  userType: "individual" | "ngo";
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  userType,
}) => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (user?.type !== userType) {
    return <Navigate to="/" />; // 💡 Redirect to home to prevent loops
  }

  return <>{children}</>;
};

export default ProtectedRoute;
