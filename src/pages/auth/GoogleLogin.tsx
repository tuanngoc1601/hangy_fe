import { useEffect } from "react";
import { fetchTyped } from "../../apis/apiv1";

export default function GoogleLogin() {
  const query = window.location.search;
  console.log('query', query)
  useEffect(() => {
    fetchTyped<never>(`/api/v1/auth/google-auth/callback${query}`, {
      method: "GET",
      // mode: "cors",
    }).then((resp) => console.log(resp));
  }, []);

  return <div>Google Login</div>;
}
