import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import {AuthContext}   from './AuthProvider'
interface ProtectedRouteProps {
    children:any;
}
 
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children}) => {
    const { token } = useContext(AuthContext);
    console.log("token to:")
    console.log(token)
    if (!token) {
      return <Navigate to="/login" replace />;
    }
  
    return children;
}
 
export default ProtectedRoute;