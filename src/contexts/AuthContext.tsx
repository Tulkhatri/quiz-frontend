/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";
interface User {
  token: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  setUserData: (userData: User) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const setUserData = (userData: User) => {
    setUser(userData);
  };

  return (
    <AuthContext.Provider value={{ user, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
