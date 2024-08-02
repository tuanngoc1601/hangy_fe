import { RegisterForm } from "../types/app";
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

export function useAuthRegister() {
  const { trigger } = useSWRMutation(
    "/api/v1/auth/register",
    (url: string, { arg }: { arg: RegisterForm }) => {
      return fetchTyped<any>(url, {
        method: "POST",
        body: JSON.stringify(arg),
      });
    }
  );

  return { dispatch: trigger };
}
