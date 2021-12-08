import { buildAsyncAction, buildXHR } from "@/helpers";
import { API_LABELS } from "@/redux/actionLabels/api";
import getCookie from "@/utils/cookies/getCookies";

type TRequest = {
  access_token: string;
};
type TResponse = {
  // TODO: Add real API response typescript
  data: any;
};
const token = getCookie("access_token");

export const useGetOfficeShifts =
(id: number | undefined) =>
buildXHR<TRequest, TResponse>({
  url: `/api/office-shifts?office_id=${id}`,
  method: "GET",
  headers: { Authorization: `Bearer ${token}` },

});
