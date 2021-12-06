import { buildXHR } from "@/helpers";

type TRequest = {
  access_token: string;
};
type TResponse = {
  // TODO: API response typescript
  data: any;
  pagination: any;
};

export const useGetTimeKeepingList = buildXHR<TRequest, TResponse>({
  url: "/api/timekeeping/history-timekeeping",
  method: "GET",
});
