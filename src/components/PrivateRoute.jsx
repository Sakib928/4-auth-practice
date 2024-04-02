import { useContext } from "react";
import { AuthContext } from "../assets/Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
