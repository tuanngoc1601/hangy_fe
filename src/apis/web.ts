import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import { fetchTyped, useFetchTyped } from "./apiv1";
import { CartPayload, CartItem, CategoryType, ProductItem } from "../types/app";
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
    `/api/v1/products${queryString}`,
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
    "/api/v1/carts/get-cart",
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
