import { Navigate, Outlet } from "react-router-dom";
import useHangyStore from "../../lib/useStore";

export const ProtectedRoute = () => {
  const access_token = useHangyStore((state) => state.access_token);
  if (access_token) {
    return <Navigate to={"/"} replace />;
  }

  return <Outlet />;
};
