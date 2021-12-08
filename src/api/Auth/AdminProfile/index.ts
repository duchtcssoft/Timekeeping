import { buildAsyncAction, buildXHR } from "@/helpers";
import { API_LABELS } from "@/redux/actionLabels/api";
import getCookie from "@/utils/cookies/getCookies";
import { useCookies } from "react-cookie";

type TRequest = {
  access_token: string;
};
type TResponse = {
// TODO: Add real API Response typescript
  data: any;
};
// const token = document.cookie;
  const token = getCookie("access_token");
export const useRequestAdminProfile = buildXHR<TRequest, TResponse>({
  url: "/api/auth/profile",
  method: "POST",
  headers: { Authorization: `Bearer ${token}` },
});

export const useGetAdminProfileAction = buildAsyncAction({
  XHRHook: useRequestAdminProfile,
  LOADING_LABEL: API_LABELS.GET_ADMIN_NAME_LOADING,
  SUCCESS_LABEL: API_LABELS.GET_ADMIN_NAME_SUCCESS,
  ERROR_LABEL: API_LABELS.GET_ADMIN_NAME_ERROR,
});
