import { persist } from "zustand/middleware";
import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";

interface HangyStore {
  access_token?: string;
  refresh_token?: string;
  setToken(v: string | undefined): void;

  welcomePopup: boolean;
  isSelectedAllCart: boolean;
  setIsSeletedAllCart(v: boolean): void;
  selectedItemCarts: string[];
  setSelectedItemCarts(v: string[]): void;
  totalPaymentCarts: number;
  setTotalPaymentCarts(v: number): void;

  reset(): void;
}

const initialState = {
  welcomePopup: true,
  isSelectedAllCart: false,
  selectedItemCarts: [],
  totalPaymentCarts: 0,
};

const useHangyStore = createWithEqualityFn<HangyStore>()(
  persist(
    (set) => ({
      ...initialState,
      setToken(v) {
        set({ access_token: v });
      },
      setIsSeletedAllCart(v) {
        set({ isSelectedAllCart: v });
      },
      setSelectedItemCarts(v) {
        set({ selectedItemCarts: v });
      },
      setTotalPaymentCarts(v) {
        set({ totalPaymentCarts: v });
      },

      reset: () => {
        set(initialState);
      },
    }),
    {
      name: "hangy-store",
      partialize: (state) => ({
        access_token: state.access_token,
        refresh_token: state.refresh_token,
        isSelectedAllCart: state.isSelectedAllCart,
        selectedItemCarts: state.selectedItemCarts,
        totalPaymentCarts: state.totalPaymentCarts,
      }),
    }
  ),
  shallow
);

export default useHangyStore;
