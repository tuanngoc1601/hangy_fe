import { Navigate } from "react-router-dom";
import { useLoginGoogleCallback } from "../../apis/auth";
import useHangyStore from "../../lib/useStore";

export default function GoogleLogin() {
  const query = window.location.search;
  const { data: user } = useLoginGoogleCallback(query);
  const setToken = useHangyStore((state) => state.setToken);
  if (user) {
    setToken(user.access_token);
    useHangyStore.setState({
      refresh_token: user.refresh_token,
    });
  }

  return <Navigate to={"/"} replace />;
}
