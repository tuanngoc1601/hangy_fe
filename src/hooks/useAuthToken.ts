import useHangyStore from "../lib/useStore";

export function useAuthToken() {
  const access_token = useHangyStore((state) => state.access_token);
  const refresh_token = useHangyStore((state) => state.refresh_token);
  const setToken = useHangyStore((state) => state.setToken);

  return { access_token, refresh_token, setToken };
}
