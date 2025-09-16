import React, { createContext, useContext, useState, ReactNode } from "react";

interface User {
  phone: string;
  type: "individual" | "ngo";
  name?: string;
}

interface AuthContextType {
  user: User | null;
  login: (phone: string, otp: string) => string | null; // 💡 Change return type to string or null
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (phone: string, otp: string): string | null => {
    if (otp === "1234") {
      const userType = phone.startsWith("1") ? "ngo" : "individual";
      setUser({
        phone,
        type: userType,
        name: userType === "ngo" ? "NGO Admin" : "Donor",
      });
      return userType; // 💡 Return the user type
    }
    return null;
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
