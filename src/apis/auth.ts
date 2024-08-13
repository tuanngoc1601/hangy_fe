import useSWR from "swr";
import { AuthResponse, RegisterForm } from "../types/app";
import { fetchTyped } from "./apiv1";
import useSWRMutation from "swr/mutation";

export function useAuthLogin() {
  const { trigger } = useSWRMutation(
    "/api/v1/auth/login",
    (url: string, { arg }: { arg: { email: string; password: string } }) => {
      return fetchTyped<AuthResponse>(url, {
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
      return fetchTyped<AuthResponse>(url, {
        method: "POST",
        body: JSON.stringify(arg),
      });
    }
  );

  return { dispatch: trigger };
}

export function useAuthGoogleUrl() {
  const { data, error, isLoading } = useSWR(
    "/api/v1/auth/google-auth/redirect",
    (url) =>
      fetchTyped<string>(url, {
        method: "GET",
      })
  );

  return { data: data?.data, isLoading, error };
}

export function useLoginGoogleCallback() {
  const { data, error } = useSWR(`/api/v1/auth/google-auth/callback`, (url) =>
    fetchTyped<any>(url, {
      method: "GET",
      // mode: "no-cors",
    })
  );

  return { data: data?.data, error };
}
