import { Navigate } from "react-router-dom";
import { useLoginSocialCallback } from "../../apis/auth";
import useHangyStore from "../../lib/useStore";
import { useEffect, useState } from "react";

export default function FacebookLogin() {
  const query = window.location.search;
  const { data: user, isLoading } = useLoginSocialCallback(query, "facebook");
  const setToken = useHangyStore((state) => state.setToken);
  const [isStoredToken, setIsStoredToken] = useState<boolean>(false);

  useEffect(() => {
    if (user) {
      setToken(user.access_token);
      useHangyStore.setState({
        refresh_token: user.refresh_token,
      });
      setIsStoredToken(true);
    }
  }, [user, setToken]);

  if (isLoading && !isStoredToken) {
    return <div>Loading...</div>;
  }

  return <Navigate to={"/"} replace />;
}
