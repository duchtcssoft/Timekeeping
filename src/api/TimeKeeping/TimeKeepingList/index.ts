import { buildXHR } from "@/helpers";
import getCookie from "@/utils/cookies/getCookies";

type TRequest = {
  access_token: string;
};
type TResponse = {
  // TODO: API response typescript
  data: any;
  pagination: any;
};
const token = getCookie("access_token");

export const useGetTimeKeepingList = buildXHR<TRequest, TResponse>({
  url: "/api/timekeeping/history-timekeeping",
  method: "GET",
  headers: { Authorization: `Bearer ${token}` },
});
