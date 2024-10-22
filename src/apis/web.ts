import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import { fetchTyped, useFetchTyped } from "./apiv1";
import {
  CartPayload,
  CartItem,
  CategoryType,
  ProductItem,
  ContactPayload,
  OrderPayload,
  OrderType,
  ReOrderPayloadItem,
  FlashSaleResponse,
} from "../types/app";
import useHangyStore from "../lib/useStore";
import useSWRMutation from "swr/mutation";

export function useGetCategories() {
  const { data, error, isLoading } = useSWRImmutable(
    `/api/v1/categories/categories-all`,
    (url) =>
      fetchTyped<CategoryType[]>(url, {
        method: "GET",
      })
  );

  return { data: data?.data, isLoading, error };
}

export function useGetProducts(type?: string, search?: string) {
  const queryParams: string[] = [];
  if (type) queryParams.push(`type=${type}`);
  if (search) queryParams.push(`search=${search}`);
  const queryString = queryParams.length ? `?${queryParams.join("&")}` : "";
  const { data, isLoading, error } = useSWR(
    `/api/v1/products/get-products${queryString}`,
    (url: string) =>
      fetchTyped<ProductItem[]>(url, {
        method: "GET",
      })
  );

  return { data: data?.data, isLoading, error };
}

export function useGetProductDetail(slug: string) {
  const { data, isLoading, error } = useSWR(
    `/api/v1/products/${slug}`,
    (url: string) =>
      fetchTyped<ProductItem>(url, {
        method: "GET",
      })
  );

  return { data: data?.data, isLoading, error };
}

export function useGetCart() {
  const useFetch = useFetchTyped<CartItem[]>();
  const access_token = useHangyStore((state) => state.access_token);
  const { data, isLoading, error, mutate } = useSWRImmutable(
    access_token ? "/api/v1/carts/get-cart" : null,
    (url: string) => {
      return useFetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
    }
  );

  return { data: data?.data, isLoading, error, mutate };
}

export function useAddToCart() {
  const useFetch = useFetchTyped<string>();
  const access_token = useHangyStore((state) => state.access_token);
  const { trigger } = useSWRMutation(
    access_token ? "/api/v1/carts/add-cart" : null,
    (url: string, { arg }: { arg: CartPayload }) =>
      useFetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify(arg),
      })
  );

  return { dispatch: trigger };
}

export function useUpdateQuantity(
  type: string,
  productId: string,
  subProductId: string | null
) {
  const useFetch = useFetchTyped<string>();
  const access_token = useHangyStore((state) => state.access_token);
  const { trigger } = useSWRMutation(
    access_token
      ? `/api/v1/carts/update/${type}/${productId}/${subProductId}`
      : null,
    (url: string) =>
      useFetch(url, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
  );

  return { dispatch: trigger };
}

export function useUpdateSubProductItem(
  productId: string,
  subProductId: string | null
) {
  const useFetch = useFetchTyped<string>();
  const access_token = useHangyStore((state) => state.access_token);
  const { trigger } = useSWRMutation(
    access_token ? `/api/v1/carts/update/${productId}/${subProductId}` : null,
    (url: string, { arg }: { arg: { sub: string } }) =>
      useFetch(url, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify(arg),
      })
  );

  return { dispatch: trigger };
}

export function useDeleteCartItem(cartItemId: string) {
  const useFetch = useFetchTyped<string>();
  const access_token = useHangyStore((state) => state.access_token);
  const { trigger } = useSWRMutation(
    access_token ? `/api/v1/carts/delete/${cartItemId}` : null,
    (url: string) =>
      useFetch(url, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
  );

  return { dispatch: trigger };
}

export function useDeleteAllCarts() {
  const useFetch = useFetchTyped<string>();
  const access_token = useHangyStore((state) => state.access_token);
  const { trigger } = useSWRMutation(
    access_token ? "/api/v1/carts/delete/all-carts" : null,
    (url: string, { arg }: { arg: { cart_item_ids: string[] } }) =>
      useFetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify(arg),
      })
  );

  return { dispatch: trigger };
}

export function useGetSelectedItems(cart_item_ids: string[]) {
  const useFetch = useFetchTyped<CartItem[]>();
  const access_token = useHangyStore((state) => state.access_token);
  const { data, isLoading, error } = useSWR(
    access_token ? "/api/v1/carts/get-selected-items" : null,
    (url: string) =>
      useFetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify({ cart_item_ids: cart_item_ids }),
      })
  );

  return { data: data?.data, isLoading, error };
}

export function useCreateContact() {
  const { trigger, isMutating } = useSWRMutation(
    "/api/v1/contact/create",
    (url: string, { arg }: { arg: ContactPayload }) =>
      fetchTyped<string>(url, {
        method: "POST",
        body: JSON.stringify(arg),
      })
  );

  return { dispatch: trigger, isMutating };
}

export function usePlaceOrder() {
  const useFetch = useFetchTyped<string>();
  const access_token = useHangyStore((state) => state.access_token);
  const { trigger } = useSWRMutation(
    access_token ? "/api/v1/orders/store" : null,
    (url: string, { arg }: { arg: OrderPayload }) =>
      useFetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify(arg),
      })
  );

  return { dispatch: trigger };
}

export function useBestSellingProducts() {
  const { data, isLoading, error, mutate } = useSWRImmutable(
    "/api/v1/products/get-best-sellings",
    (url: string) => {
      return fetchTyped<ProductItem[]>(url, {
        method: "GET",
      });
    }
  );

  return { data: data?.data, isLoading, error, mutate };
}

export function useGetOrders(status?: string) {
  const useFetch = useFetchTyped<OrderType[]>();
  const access_token = useHangyStore((state) => state.access_token);
  const queryParams: string[] = [];
  if (status) queryParams.push(`status=${status}`);
  const queryString = queryParams.length ? `?${queryParams.join("&")}` : "";
  const { data, isLoading, mutate } = useSWRImmutable(
    access_token ? `/api/v1/orders/get-orders${queryString}` : null,
    (url: string) =>
      useFetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
  );

  return { data: data?.data, isLoading, mutate };
}

export function useReOrderItem() {
  const useFetch = useFetchTyped<string[]>();
  const access_token = useHangyStore((state) => state.access_token);
  const { trigger } = useSWRMutation(
    access_token ? "/api/v1/orders/re-order" : null,
    (url: string, { arg }: { arg: { order_items: ReOrderPayloadItem[] } }) =>
      useFetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify(arg),
      })
  );

  return { dispatch: trigger };
}

export function useGetStatusOrders() {
  const useFetch = useFetchTyped<{ id: string; name: string }[]>();
  const access_token = useHangyStore((state) => state.access_token);
  const { data, isLoading } = useSWRImmutable(
    access_token ? "/api/v1/orders/get-status" : null,
    (url: string) =>
      useFetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
  );

  return { data: data?.data, isLoading };
}

export function useGetFlashSales() {
  const { data, isLoading } = useSWRImmutable(
    "/api/v1/sales/get-flash-sales",
    (url: string) => {
      return fetchTyped<FlashSaleResponse>(url, {
        method: "GET",
      });
    }
  );

  return { data: data?.data, isLoading };
}
