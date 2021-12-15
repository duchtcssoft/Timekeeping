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

const DEFAULT_API_RESPONSE = {};

/**
 * buildXHR
 * @description build a like-useAsync-hook for request API
 * @param configs
 * @return React Hook for requesting API
 * @example
 * type TRequest = {
    email: string;
    password: string;
   };
   type TParams = {
    someParam: string;
   };
   type TResponse = {
    access_token: string;
   };
   export const useRequestRegisterAccount = buildXHR<
     TRequest,
     TResponse,
     TParams,
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
  { headers, url: urlAtBuildTime, ...restConfigs }: TApiConfigs & AxiosRequestConfig,
  axiosInstance: AxiosInstance = AXIOS_INSTANCE,
) => () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState<TResponse | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);

  const execute = (
    cbProps?: TCallbackProps<
      TRequestData,
      TRequestParams,
      TResponse
    >,
  ) => {
    const { url: urlAtRunTime, data, params, cbSuccess, cbError } = cbProps || {};
    setLoading(true);

    return axiosInstance
      .request({
        headers,
        data,
        params,
        ...restConfigs,
        url: urlAtRunTime || urlAtBuildTime,
      })
      .then((response: AxiosResponse<TResponse>) => {
        setResponse(response.data);
        setError(null);
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
    response: (response || DEFAULT_API_RESPONSE) as ShallowExpand<TResponse>,
    error,
  };
};
