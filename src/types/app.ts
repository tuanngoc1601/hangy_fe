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
  access_token: string;
  google_id: string;
  email_verified_at: string | null;
}

export interface RegisterForm {
  email: string;
  username: string;
  password: string;
  password_confirmation: string;
}
