import { TOKEN } from "@/constants/BaseURL/Config";
import { buildAsyncAction, buildXHR } from "@/helpers";
import { API_LABELS } from "@/redux/actionLabels";
import { number } from "yup/lib/locale";

interface TRequest {
  name: string;
  address: string;
  province_id: number;
  latitude: number;
  longitude: number;
  starting_hour: string;
  ending_hour: string;
}
export type TParams = {
  id: number;
};
export type TResponseOffice = {
  listOffice: any[];
};

export const useAddOffice = buildXHR<TRequest, TResponseOffice, undefined>({
  url: "/offices",
  method: "POST",
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

export const useRequestOffice = buildXHR<TRequest, TResponseOffice, undefined>({
  url: "/offices",
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
});
export const useGetOfficeAction = buildAsyncAction({
  XHRHook: useRequestOffice,
  LOADING_LABEL: API_LABELS.GET_OFFICE_LOADING,
  SUCCESS_LABEL: API_LABELS.GET_OFFICE_SUCCESS,
  ERROR_LABEL: API_LABELS.GET_OFFICE_ERROR,
});

export const useDeleteOffice = (id: number) =>
  // TODO: ding nghia typeScript cho responrse chp API nay
  buildXHR<undefined, undefined, TParams>({
    url: `/api/employes/${id}`,
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

export const usePostOfficeAction = buildAsyncAction({
  XHRHook: useRequestOffice,
  LOADING_LABEL: API_LABELS.GET_OFFICE_LOADING,
  SUCCESS_LABEL: API_LABELS.GET_OFFICE_SUCCESS,
  ERROR_LABEL: API_LABELS.GET_OFFICE_ERROR,
});
