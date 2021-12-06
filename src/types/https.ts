// libs
import { AxiosError } from "axios";

export type TPreprocessRequestPayload = {
  data: AnyObject | null;
  searchParams?: AnyObject | null;
  others?: AnyObject;
};

type THttpMethod =
  | "POST"
  | "GET"
  | "PATCH"
  | "DELETE"
  | "HEAD"
  | "OPTIONS"
  | "PUT"
  | "LINK"
  | "UNLINK";

export type TApiConfigs = {
  /** API URL */
  url: string;
  /** http method */
  method: THttpMethod;
};

// eslint-disable-next-line @typescript-eslint/comma-dangle
export type TCallbackProps<
  TRequestData,
  TRequestParams,
  TResponse,
  TRequestHeaders
> = {
  data?: TRequestData;
  params?: TRequestParams;
  headers?: TRequestHeaders;
  cbSuccess?: (responseData: TResponse) => void;
  cbError?: (errors: AxiosError) => void;
};

// eslint-disable-next-line @typescript-eslint/comma-dangle
export type TAsyncActionConfigs<
  TRequestData = AnyObject,
  TResponse = AnyObject,
  TRequestParams = AnyObject,
  TRequestHeaders = AnyObject
> = {
  /** Labels for save data in Redux Store */
  LOADING_LABEL: string;
  /** Labels for save data in Redux Store */
  SUCCESS_LABEL: string;
  /** Labels for save data in Redux Store */
  ERROR_LABEL: string;
  /** Async Hook built by function buildXHR */
  XHRHook: () => {
    execute: (
      cbProps?: TCallbackProps<
        TRequestData,
        TRequestParams,
        TResponse,
        TRequestHeaders
      >
    ) => Promise<void>;
    isLoading: boolean;
    response: TResponse | null;
    error: AxiosError | null;
  };
};
