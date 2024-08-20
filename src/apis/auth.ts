// import useSWR from "swr";
import { AuthResponse, RegisterForm } from "../types/app";
import { fetchTyped, useFetchTyped } from "./apiv1";
import useSWRMutation from "swr/mutation";
import useSWRImmutable from "swr/immutable";
import useHangyStore from "../lib/useStore";

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
  const { data, error, isLoading } = useSWRImmutable(
    "/api/v1/auth/google-auth/redirect",
    (url) =>
      fetchTyped<string>(url, {
        method: "GET",
      })
  );

  return { data: data?.data, isLoading, error };
}

export function useAuthFacebookUrl() {
  const { data, error, isLoading } = useSWRImmutable(
    "/api/v1/auth/facebook-auth/redirect",
    (url) =>
      fetchTyped<string>(url, {
        method: "GET",
      })
  );

  return { data: data?.data, isLoading, error };
}

export function useLoginGoogleCallback(query: string | undefined) {
  const { data, error } = useSWRImmutable(
    query ? `/api/v1/auth/google-auth/callback${query}` : null,
    (url) =>
      fetchTyped<AuthResponse>(url, {
        method: "GET",
      })
  );

  return { data: data?.data, error };
}

export function useLoginFacebookCallback(query: string | undefined) {
  const { data, error } = useSWRImmutable(
    query ? `/api/v1/auth/facebook-auth/callback${query}` : null,
    (url) =>
      fetchTyped<AuthResponse>(url, {
        method: "GET",
      })
  );

  return { data: data?.data, error };
}

export function useAuthLogout() {
  const useFetch = useFetchTyped<string>();
  const access_token = useHangyStore((state) => state.access_token);
  const { trigger } = useSWRMutation("/api/v1/auth/logout", (url: string) => {
    return useFetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  });

  return { dispatch: trigger };
}

export function useRefreshToken() {
  const refresh_token = useHangyStore((state) => state.refresh_token);
  const { trigger } = useSWRMutation("/api/v1/auth/refresh", (url: string) => {
    return fetchTyped<AuthResponse>(url, {
      method: "POST",
      body: JSON.stringify({
        refresh_token: refresh_token,
      }),
    });
  });

  return { dispatch: trigger };
}
