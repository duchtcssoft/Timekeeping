import { buildAsyncAction, buildXHR } from "@/helpers";
import { API_LABELS } from "@/redux/actionLabels/api";
import getCookie from "@/utils/cookies/getCookies";
// import { } from "@/redux/actionLabels";
// import { number } from "yup/lib/locale";

export type TRequest = {
  name: string;
  address: string;
  province_id: number;
  latitude: number;
  longitude: number;
  starting_hour: string;
  ending_hour: string;
};

export type TParams = {
  id: number;
};
export type TResponseOffice = {
  listOffice: any[];
};
const token = getCookie("access_token");

export const useAddOffice = buildXHR<TRequest, TResponseOffice, undefined>({
  url: "/api/offices",
  method: "POST",
  headers: { Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90aW1la2VlcGluZy5jc3NkZW1vY28uY29tXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjM5MzY4NDA3LCJleHAiOjE2Mzk3Mjg0MDcsIm5iZiI6MTYzOTM2ODQwNywianRpIjoiV3JlZk9SN2ZBNW5YS0VhbCIsInN1YiI6NSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.ou4cfUJk3j7puteTODSaAfhe0ifXewAjohcjYxvumhY" },
});

export const usePostOfficeAction = buildAsyncAction({
  XHRHook: useAddOffice,
  LOADING_LABEL: API_LABELS.CREATE_OFFICCE_LOADING,
  SUCCESS_LABEL: API_LABELS.CREATE_OFFICCE_SUCCESS,
  ERROR_LABEL: API_LABELS.CREATE_OFFICCE_ERROR,
});

  export const useRequestOffice = buildXHR<TRequest, TResponseOffice, undefined>({
  url: "/api/offices",
  method: "GET",
  headers: { Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90aW1la2VlcGluZy5jc3NkZW1vY28uY29tXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjM5MzY4NDA3LCJleHAiOjE2Mzk3Mjg0MDcsIm5iZiI6MTYzOTM2ODQwNywianRpIjoiV3JlZk9SN2ZBNW5YS0VhbCIsInN1YiI6NSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.ou4cfUJk3j7puteTODSaAfhe0ifXewAjohcjYxvumhY" },
});

export const useGetOfficeAction = buildAsyncAction({
  XHRHook: useRequestOffice,
  LOADING_LABEL: API_LABELS.GET_OFFICES_LOADING,
  SUCCESS_LABEL: API_LABELS.GET_OFFICES_SUCCESS,
  ERROR_LABEL: API_LABELS.GET_OFFICES_ERROR,
});

export const useDeleteOffice =
  // TODO: dinh nghia typeScript cho responrse chp API nay
  buildXHR<undefined, undefined, TParams>({
    method: "DELETE",
    headers: { Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90aW1la2VlcGluZy5jc3NkZW1vY28uY29tXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjM5MzY4NDA3LCJleHAiOjE2Mzk3Mjg0MDcsIm5iZiI6MTYzOTM2ODQwNywianRpIjoiV3JlZk9SN2ZBNW5YS0VhbCIsInN1YiI6NSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.ou4cfUJk3j7puteTODSaAfhe0ifXewAjohcjYxvumhY" },
  });

export const useDeleteOfficeAction = buildAsyncAction({
  XHRHook: useDeleteOffice,
  LOADING_LABEL: API_LABELS.DELETE_OFFICCE_LOADING,
  SUCCESS_LABEL: API_LABELS.DELETE_OFFICCE_SUCCESS,
  ERROR_LABEL: API_LABELS.DELETE_OFFICCE_ERROR,
});
