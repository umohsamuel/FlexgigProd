import { Navigate } from "react-router-dom";
import { useContext, ReactNode } from "react";
import { AuthContext } from "../context/AuthContext";

const Protected = ({ children }: { children: ReactNode }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/createaccount" replace />;
  } else {
    return children;
  }
};
export default Protected;
