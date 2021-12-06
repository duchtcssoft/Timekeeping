import { buildAsyncAction, buildXHR } from "@/helpers";
import { API_LABELS } from "@/redux/actionLabels/api";

type TRequest = {
  access_token: string;
};
type TResponse = {
  data: any;
};
export const useRequestOffices = buildXHR<TRequest, TResponse>({
  url: "/api/offices",
  method: "GET",
});

export const useGetOfficesAction = buildAsyncAction({
  XHRHook: useRequestOffices,
  LOADING_LABEL: API_LABELS.GET_OFFICES_LOADING,
  SUCCESS_LABEL: API_LABELS.GET_OFFICES_SUCCESS,
  ERROR_LABEL: API_LABELS.GET_OFFICES_ERROR,
});
