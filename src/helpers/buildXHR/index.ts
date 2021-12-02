// libs
import { useState } from "react";
import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
// types
import { TApiConfigs, TCallbackProps } from "@/types";
// others
import { AXIOS_INSTANCE } from "@/https/AxiosInstance";
import { defaultHttpError, defaultHttpSuccess } from "@/utils/https";

/**
 * buildXHRgjhjnm
 * @description build a like-useAsync-hook for request API
 * @param configs
 * @return React Hook for requesting API
 * @example
 * type Request = {
    email: string;
    password: string;
   };
   type Response = {
    access_token: string;
   };
   export const useRequestRegisterAccount = buildXHR<
     Request,
     Response
   >({
     url: "/example/api/endpoint/",
     method: "POST",
   });
   // Usage in React Component
     const { execute, isLoading, response } = useRequestRegisterAccount();
     execute({
       cbSuccess: (res) => {
         // This is on success callback
       }
     });
 */
export const buildXHR = <
  TRequestData = AnyObject,
  TResponse = AnyObject,
  TRequestParams = AnyObject,
>(
  configs: TApiConfigs & AxiosRequestConfig,
  axiosInstance: AxiosInstance = AXIOS_INSTANCE,
) => () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState<TResponse | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);

  const execute = (
    cbProps?: TCallbackProps<TRequestData, TRequestParams, TResponse>,
  ) => {
    const { data, params, cbSuccess, cbError } = cbProps || {};
    setLoading(true);
    setResponse(null);
    setError(null);

    return axiosInstance
      .request({
        data,
        params,
        ...configs,
      })
      .then((response: AxiosResponse<TResponse>) => {
        setResponse(response.data);
        if (cbSuccess) cbSuccess(response.data);
        else defaultHttpSuccess();
      })
      .catch((error: AxiosError) => {
        setError(error);
        if (cbError) cbError(error);
        else defaultHttpError(error);
      })
      .finally(() => setLoading(false));
  };

  return {
    execute,
    isLoading,
    response,
    error,
  };
};
