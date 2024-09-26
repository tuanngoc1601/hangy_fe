import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import { fetchTyped } from "./apiv1";
import { CategoryType, ProductItem } from "../types/app";

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
