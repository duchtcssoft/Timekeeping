import { buildXHR } from "@/helpers";

type TRequest = {
  access_token: string;
};
type TParams = {
  password: string;
  password_confirmation: string;
};
export const useRequestForgotPassword = buildXHR<TRequest, TParams>({
  url: "/api/auth/forgot-password",
  method: "PUT",
});
