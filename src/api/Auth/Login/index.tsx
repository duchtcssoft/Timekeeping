import { buildXHR } from "@/helpers";

type TRequest = {
  email: string;
  password: string;
};
type TResponse = {
  data: any;
};
export const useRequestLogin = buildXHR<TRequest, TResponse>({
  url: "/api/auth/login",
  method: "POST",
});
