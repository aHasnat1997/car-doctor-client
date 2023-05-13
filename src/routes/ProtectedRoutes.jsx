import { useContext } from "react";
import { AuthContext } from "../AuthSystem/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { FaAffiliatetheme } from "react-icons/fa";

const ProtectedRoutes = ({ children }) => {

  const { user, loader } = useContext(AuthContext);
  const location = useLocation();

  if (loader) {
    return <div className="w-full my-60 text-8xl flex justify-center">
      <FaAffiliatetheme className='animate-spin' />
    </div>
  }

  if (user) {
    return children;
  }

  return <Navigate to='/login' state={{ from: location }} replace />
};

export default ProtectedRoutes;
