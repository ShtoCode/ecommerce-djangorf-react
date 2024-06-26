import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { userRequest, userUpdateRequest } from "../api/auth.api";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const getTokensFromLocalStorage = () => {
    const storedTokens = localStorage.getItem("authTokens");
    return storedTokens ? JSON.parse(localStorage.getItem("authTokens")) : null;
  };

  const getUserFromTokens = () => {
    const authTokens = localStorage.getItem("authTokens");
    return authTokens ? jwt_decode(authTokens) : null;
  };

  const [authTokens, setAuthTokens] = useState(getTokensFromLocalStorage());

  const [user, setUser] = useState(getUserFromTokens());

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await userRequest(e.target);
      const data = await response.data;
      handleLoginResponse(response, data);
    } catch (error) {
      if (error.response && error.response.data) {
        console.log(error.response.data);
      } else {
        console.log(error);
      }
    }
  };

  const handleLoginResponse = (response, data) => {
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      navigate("/admin");
    } else {
      alert("Something went wrong :(");
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/login");
  };

  const updateToken = async (authTokens) => {
    try {
      console.log("update token called!!");
      const response = await userUpdateRequest(authTokens.refresh);
      const data = await response.data;
      handleTokenResponse(response, data);
    } catch (error) {
      if (error.response && error.response.data) {
        console.log(error.response.data);
      } else if (error.response && error.response.statusText) {
        console.log(error.response.statusText);
      } else {
        console.log(error);
      }
    }
  };

  const handleTokenResponse = (response, data) => {
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      logoutUser();
    }
  };

  const contextData = {
    user: user,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  useEffect(() => {
    let fiveMinutes = 1000 * 60 * 5
    const interval = setInterval(() => {
      if (authTokens) {
        updateToken(authTokens);
      }
    }, fiveMinutes);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
