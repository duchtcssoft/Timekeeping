import { buildXHR } from "@/helpers";

type TRequest = {
  checkin_hour: number;
  checkin_minutes: number;
  office_id: string;
  office_shifts_id: string;
  checkin_note: string;
  longitude: number;
  latitude: number;
};
type TResponse = {
  access_token: string;
};
export const useRequestCheckIn = buildXHR<TRequest, TResponse>({
  url: "/api/auth/login",
  method: "POST",
});
