import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authDetails, setAuthDetails] = useState({
    isLoggedIn: true,
    token: null,
  });

  const Login = (token) => {
    setAuthDetails({
      isLoggedIn: true,
      token: token,
    });
  };

  const Logout = () => {
    setAuthDetails({
      isLoggedIn: false,
      token: null,
    });
  };

  return (
    <AuthContext.Provider value={{ authDetails, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
}
