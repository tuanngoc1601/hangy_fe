import { useEffect } from "react";
import { fetchTyped } from "../../apis/apiv1";

export default function GoogleLogin() {
  // const query = window.location.search;
  useEffect(() => {
    fetchTyped<any>("/api/v1/auth/google-auth/callback", {
      method: "GET",
      // mode: "cors",
    }).then((resp) => console.log(resp));
  }, []);

  return <div>Google Login</div>;
}
