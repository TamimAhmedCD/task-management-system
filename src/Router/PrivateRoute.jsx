import useAuth from "@/hooks/useAuth";
import { Navigate, useLocation } from "react-router";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-4xl animate-pulse">Loading...</h1>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
