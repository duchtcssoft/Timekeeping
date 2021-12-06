import { buildAsyncAction, buildXHR } from "@/helpers";
import { API_LABELS } from "@/redux/actionLabels/api";

type TRequest = {
  access_token: string;
};
type TResponse = {
  // TODO: Add real API response typescript
  data: any;
};
type TParams = {
  office_id: string;
};
export const useRequestOfficeShifts = buildXHR<TRequest, TResponse, TParams>({
  url: "/api/offices",
  method: "GET",
});

export const useGetOfficeShifts = buildAsyncAction({
  XHRHook: useRequestOfficeShifts,
  LOADING_LABEL: API_LABELS.GET_ADMIN_NAME_LOADING,
  SUCCESS_LABEL: API_LABELS.GET_ADMIN_NAME_SUCCESS,
  ERROR_LABEL: API_LABELS.GET_ADMIN_NAME_ERROR,
});
