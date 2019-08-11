import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [isAuthenticated, setAuth] = useState(false);

  const toggleAuth = () => {
    setAuth(!isAuthenticated);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
}
