import { buildXHR } from "@/helpers";

type TRequest = {
  email: string;
};
export const useRequestForgotPassword = buildXHR<TRequest>({
  url: "/api/auth/forgot-password",
  method: "POST",
});
