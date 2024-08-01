import { fetchTyped } from "./apiv1";
// import useSWR from "swr";
import useSWRMutation from "swr/mutation";

export function useAuthLogin() {
  const { trigger } = useSWRMutation(
    "/api/v1/auth/login",
    (url: string, { arg }: { arg: { email: string; password: string } }) => {
      return fetchTyped<any>(url, {
        method: "POST",
        body: JSON.stringify(arg),
      });
    }
  );

  return { dispatch: trigger };
}
