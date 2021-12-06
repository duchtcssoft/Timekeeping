import { buildXHR } from "@/helpers";

type TRequest = {
  access_token: string;
};
type TResponse = {
  id: string;
  name: string;
};
export const useRequestGetOffice = buildXHR<TRequest, TResponse>({
  url: "/api/offices",
  method: "GET",
});
