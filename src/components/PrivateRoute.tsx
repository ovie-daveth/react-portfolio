import React from "react";
import { useAuth } from "../states/useAuth.tsx"; 
import { Navigate } from "react-router-dom"; 

interface PrivateRouteProps {
  children: JSX.Element; 
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const authContext = useAuth();

  if (!authContext || !authContext.currentUser) {
   
    return <Navigate to="/login" />;
  }

  return children; 
};

export default PrivateRoute;
