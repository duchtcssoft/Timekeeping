import { buildAsyncAction, buildXHR } from "@/helpers";
import { API_LABELS } from "@/redux/actionLabels/api";

type TRequest = {
  access_token: string;
};
type TResponse = {
  data: any;
};
export const useRequestOfficeShifts = (id: number) => buildXHR<TRequest, TResponse>({
  url: `/api/offices?office_id=${id}`,
  method: "GET",
});

// export const useGetOfficeShifts = buildAsyncAction({
//   XHRHook: useRequestOfficeShifts,
//   LOADING_LABEL: API_LABELS.GET_ADMIN_NAME_LOADING,
//   SUCCESS_LABEL: API_LABELS.GET_ADMIN_NAME_SUCCESS,
//   ERROR_LABEL: API_LABELS.GET_ADMIN_NAME_ERROR,
// });
