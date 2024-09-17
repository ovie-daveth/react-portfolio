import React, { useState, useEffect, useContext, createContext, ReactNode } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase"; // Import Firebase configuration

// Define the shape of the AuthContext
interface AuthContextType {
  currentUser: User | null;
}

// Create a context with a default value of null
const AuthContext = createContext<AuthContextType | null>(null);

// Custom hook to access the AuthContext
export const useAuth = (): AuthContextType | null => {
  return useContext(AuthContext);
};

// Define props for the AuthProvider component
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false); // Ensure loading is set to false once the user state is known
    });

    return unsubscribe; // Cleanup subscription on unmount
  }, []);

  const value: AuthContextType = {
    currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Render children only when loading is false */}
    </AuthContext.Provider>
  );
};
