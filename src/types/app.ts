import { PropsWithChildren } from "react";

export type PropsWithClassName = {
  className?: string;
};

export type PropsWithClassNameAndChildren = PropsWithChildren &
  PropsWithClassName;

export interface APIResponse<T> {
  data?: T;
  code?: string;
  message?: string;
}

export interface AuthResponse {
  email: string;
  username: string;
  name: string | null;
  address: string | null;
  phone: string | null;
  gender: string | null;
  birth_date: string | null;
  access_token: string;
  refresh_token: string;
  social_provider: string;
  social_id: string;
  email_verified_at: string | null;
}

export interface RegisterForm {
  email: string;
  username: string;
  password: string;
  password_confirmation: string;
}

export interface CategoryType {
  id: string;
  slug: string;
  name: string;
}

export interface SubProductType {
  id: string;
  name: string;
  real_price: number | null;
  daily_price: number | null;
  flash_sale_price: number | null;
  stock_quantity: number;
  sold_quantity: number;
  product_id: string;
  image_url: string;
}

export interface ImageItem {
  id: string;
  url: string;
}

export interface ProductItem {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  real_price: number;
  daily_price: number;
  flash_sale_price: number;
  stock_quantity: number;
  sold_quantity: number;
  is_flash_sales: boolean;
  flash_sale_end_time: string | null;
  image_url: string;
  sub_products: SubProductType[];
  images: ImageItem[];
}

export interface CartItem {
  id: string;
  quantity: number;
  price: number;
  amount: number;
  product: ProductItem;
  sub_product: SubProductType | null;
}

export interface CartPayload {
  product_id: string;
  sub_product_id: string | null;
  quantity: number;
  price: number;
  amount: number;
}

export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface UserInfoPayload {
  name: string;
  phone: string;
  address: string;
  gender: string;
}

export interface OrderPayload {
  cart_item_ids: string[];
  total_amount: number;
  note_message: string;
}

export interface OrderItem {
  id: string;
  slug: string;
  price: number;
  product_id: string;
  product_name: string;
  product_image: string;
  quantity: number;
  sub_product_name: string | null;
  sub_product_id: string | null;
  sub_total_price: number;
}

export interface OrderType {
  id: string;
  order_date: string;
  status: string;
  total_amount: number;
  note_message: string;
  order_items: OrderItem[];
}

export interface ReOrderPayloadItem {
  product_id: string;
  sub_product_id: string | null;
  quantity: number;
  price: number;
  sub_total_price: number;
}

export interface FlashSaleResponse {
  is_flash_sales: boolean;
  time_start: string | null;
  time_end: string | null;
  product_sales: ProductItem[] | null;
}
