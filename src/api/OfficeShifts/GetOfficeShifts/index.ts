import { buildAsyncAction, buildXHR } from "@/helpers";
import { API_LABELS } from "@/redux/actionLabels/api";
import getCookie from "@/utils/cookies/getCookies";

type TRequest = {
  access_token: string;
};
type TParams = {
  office_id: number;
 };
type TResponse = {
  // TODO: Add real API response typescript
  data: any;
};
const token = getCookie("access_token");

export const useGetOfficeShifts =
buildXHR<TRequest, TResponse, TParams>({
  url: "/api/office-shifts",
  method: "GET",
  headers: { Authorization: `Bearer ${token}` },
});
