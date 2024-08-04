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
}

export interface RegisterForm {
  email: string;
  username: string;
  password: string;
  password_confirmation: string;
}
