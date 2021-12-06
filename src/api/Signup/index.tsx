import { buildXHR } from "@/helpers";

type TRequest = {
  name: string;
  email: string;
  phone: number;
  address: string;
  password: string;
  position: string;
};
type TResponse = {
  access_token: string;
};
export const useRequestSignup = buildXHR<TRequest, TResponse>({
  url: "/api/auth/register",
  method: "POST",
});
