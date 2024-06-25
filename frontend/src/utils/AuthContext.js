import React, { createContext, useState, useContext } from "react";
import { BASE_API_URI } from "../utils/constants";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(
    localStorage.getItem("tokens")
      ? JSON.parse(localStorage.getItem("tokens"))
      : null
  );
  const [isVerified, setIsVerified] = useState(false);

  const login = async (email_address, password) => {
    try {
      const response = await axios.post(`${BASE_API_URI}/api/auth/login/`, { 
        email_address,
        password
      });
      setAuthTokens(response.data);
      localStorage.setItem("tokens", JSON.stringify(response.data));
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const verifyEmail = async (code) => {
    try {
      await axios.post(`${BASE_API_URI}/api/auth/verify/`, { code });
      setIsVerified(true);
    } catch (error) {
      console.error('Email verification failed:', error);
    }
  };

  const logout = () => {
    setAuthTokens(null);
    localStorage.removeItem("tokens");
  };

  const value = {
    authTokens,
    login,
    verifyEmail,
    isVerified,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
