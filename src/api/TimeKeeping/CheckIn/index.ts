import { buildXHR } from "@/helpers";
import getCookie from "@/utils/cookies/getCookies";

type TRequest = {
  checkin_hour: number;
  checkin_minutes: number;
  office_id: number;
  office_shifts_id: number;
  checkin_note: string;
  longitude: string;
  latitude: string;

  // checkout_hour: number;
  // checkout_minutes: number;
};
type TResponse = {
  data: any;
};
const token = getCookie("access_token");

export const useRequestCheckIn = buildXHR<TRequest, TResponse>({
  url: "/api/timekeeping/check-in",
  method: "POST",
  headers: { Authorization: `Bearer ${token}` },
});
