import React, { createContext, useState, useContext } from "react";
import { BASE_API_URI } from "../utils/constants";
import axios from "axios";
import CustomModal from "../components/CustomModal/CustomModal";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [error, setError] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [permissions, setPermissions] = useState([]);

  const handleCloseModal = () => {
    setShowErrorModal(false);
    setError("");
  };

  const [authTokens, setAuthTokens] = useState(
    localStorage.getItem("tokens")
      ? JSON.parse(localStorage.getItem("tokens"))
      : null
  );
  

  const login = async (email_address, password) => {
    try {
      const response = await axios.post(`${BASE_API_URI}/api/auth/login/`, {
        email_address,
        password,
      });
      const data = response.data
      setAuthTokens(data);
      setPermissions(data.permission);
      localStorage.setItem("tokens", JSON.stringify(response.data));
      return data.permission;
      
    } catch (error) {
      setError("Login Failed. Please Try Again");
      setShowErrorModal(true);
      console.error("Login Failed:", error);
    }
  };

  const verifyEmail = async (code) => {
    try {
      const response = await axios.post(`${BASE_API_URI}/api/auth/verify/`, {
        code,
      });
      if (response.status === 200) {
        localStorage.setItem("accessToken", JSON.stringify(response.data.token));
        setIsVerified(true);
      } else {
        throw new Error("Verification failed");
      }
    } catch (error) {
      throw new Error("Verification failed");
    }
  };

  const logout = () => {
    setAuthTokens(null);
    localStorage.removeItem("tokens");
    setPermissions([]);
  };

  const value = {
    authTokens,
    login,
    verifyEmail,
    isVerified,
    logout,
    permissions,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
      <CustomModal
        error={error}
        showErrorModal={showErrorModal}
        handleCloseModal={handleCloseModal}
      />
    </AuthContext.Provider>
  );
};
