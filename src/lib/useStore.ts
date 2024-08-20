import { persist } from "zustand/middleware";
import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";

interface HangyStore {
  access_token?: string;
  refresh_token?: string;
  setToken(v: string | undefined): void;
}

const useHangyStore = createWithEqualityFn<HangyStore>()(
  persist(
    (set) => ({
      setToken(v) {
        set({ access_token: v });
      },
    }),
    {
      name: "hangy-store",
      partialize: (state) => ({
        access_token: state.access_token,
        refresh_token: state.refresh_token,
      }),
    }
  ),
  shallow
);

export default useHangyStore;
