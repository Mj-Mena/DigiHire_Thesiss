import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("access"); // Retrieve the token from localStorage

  if (!token) {
    // Redirect to login if no token is found
    return <Navigate to="/sign" replace />;
  }

  return children; // Render the protected component
};

export default ProtectedRoute;
