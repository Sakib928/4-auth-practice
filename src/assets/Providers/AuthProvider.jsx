import { createContext } from "react";

const authContext = createContext();
const AuthProvider = ({ children }) => {
  return <authContext.Provider>{children}</authContext.Provider>;
};

export default AuthProvider;
