import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import { fetchTyped, useFetchTyped } from "./apiv1";
import { CartItem, CategoryType, ProductItem } from "../types/app";
import useHangyStore from "../lib/useStore";

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
