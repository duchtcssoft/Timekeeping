import { buildXHR } from "@/helpers";
import getCookie from "@/utils/cookies/getCookies";

type TRequest = {
  checkout_hour: number;
  checkout_minutes: number;
  checkout_note: string;

  longitude: number;
  latitude: number;

  // checkout_hour: number;
  // checkout_minutes: number;
};
type TResponse = {
  data: any;
};
const token = getCookie("access_token");

export const useRequestCheckOut = buildXHR<TRequest, TResponse>({
  url: "/api/timekeeping/check-out",
  method: "POST",
  headers: { Authorization: `Bearer ${token}` },

});
