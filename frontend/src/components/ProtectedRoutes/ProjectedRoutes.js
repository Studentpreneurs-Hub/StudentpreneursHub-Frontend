import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../utils/AuthContext";

const ProtectedRoute = ({ children, requiredPermission }) => {
  const { authTokens, permissions } = useAuth();

  // If the user is not authenticated, redirect to the login page
  if (!authTokens) {
    return <Navigate to="/login" />;
  }

  // If a requiredPermission is specified, check if the user has it
  if (requiredPermission) {
    if (!permissions || !permissions.includes(requiredPermission)) {
      // Optionally, you can redirect to an unauthorized page or display a message
      return <Navigate to="/unauthorized" />;
    }
  }

  // If authenticated and (if required) has the necessary permission, render the children components
  return children;
};

export default ProtectedRoute;
