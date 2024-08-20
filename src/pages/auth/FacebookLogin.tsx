import { Navigate } from "react-router-dom";
import { useLoginFacebookCallback } from "../../apis/auth";
import useHangyStore from "../../lib/useStore";

export default function FacebookLogin() {
  const query = window.location.search;
  const { data: user } = useLoginFacebookCallback(query);
  const setToken = useHangyStore((state) => state.setToken);
  if (user) {
    setToken(user.access_token);
    useHangyStore.setState({
      refresh_token: user.refresh_token,
    });
  }

  return <Navigate to={"/"} replace />;
}
