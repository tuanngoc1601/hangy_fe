import { Outlet, useNavigate } from "react-router-dom";
import useHangyStore from "../../lib/useStore";

export const ProtectedRoute = () => {
  const navigate = useNavigate();
  const access_token = useHangyStore((state) => state.access_token);
  if (access_token) {
    navigate("/", { replace: true });
  }

  return <Outlet />;
};
