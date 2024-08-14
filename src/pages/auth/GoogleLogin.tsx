import { useNavigate } from "react-router-dom";
import { useLoginGoogleCallback } from "../../apis/auth";
import useHangyStore from "../../lib/useStore";

export default function GoogleLogin() {
  const query = window.location.search;
  const navigate = useNavigate();
  const { data: user } = useLoginGoogleCallback(query);
  const setToken = useHangyStore((state) => state.setToken);
  if (user) {
    setToken(user?.access_token);
  }

  return navigate("/", { replace: true });
}
