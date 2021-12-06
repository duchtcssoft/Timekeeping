// libs
import { useDispatch } from "react-redux";
// types
import { TAsyncActionConfigs, TCallbackProps } from "@/types";
// others
import { defaultHttpError, defaultHttpSuccess } from "@/utils/https";

/**
 * buildAsyncAction
 * @description process asynchronous actions
 * @return Promise<void>
 * @param configs
 * @example
 * // ...Typescript
 * export const useGetUsers = buildXHR<Request, Response>({
    url: "/v1/users",
    method: "GET",
});
  export const useGetUsersAction = buildAsyncAction({
      XHRHook: useGetUsers,
      LOADING_LABEL: "...(REDUX_LABEL)",
      SUCCESS_LABEL: "...(REDUX_LABEL)",
      ERROR_LABEL: "...(REDUX_LABEL)",
  });
  // Usage in React Component
  const { execute, isLoading, response } = useGetUsers();
  execute({
   cbSuccess: (res) => {
     // This is on success callback
   }
  });
 */
export const buildAsyncAction = <
  TRequestData = AnyObject,
  TResponse = AnyObject,
  TRequestParams = AnyObject,
  // FIXME: Why there is a TRequestHeaders here?
  TRequestHeaders = AnyObject,
>(
  configs: TAsyncActionConfigs<
    TRequestData,
    TResponse,
    TRequestParams,
    TRequestHeaders
  >,
) => () => {
  const dispatch = useDispatch();
  const { LOADING_LABEL, SUCCESS_LABEL, ERROR_LABEL, XHRHook } = configs;
  const { execute: executeXHR, isLoading, response, error } = XHRHook();

  const executeAction = (
    props: TCallbackProps<
      TRequestData,
      TRequestParams,
      TResponse,
      TRequestHeaders
    >,
  ) => {
    const { data, params, cbSuccess, cbError } = props;

    dispatch({
      type: LOADING_LABEL,
    });

    executeXHR({
      data,
      params,
      cbSuccess: (responseData) => {
        dispatch({
          type: SUCCESS_LABEL,
          payload: responseData,
        });
        if (cbSuccess) cbSuccess(responseData);
        else defaultHttpSuccess();
      },
      cbError: (error) => {
        dispatch({
          type: ERROR_LABEL,
          payload: { error },
        });
        if (cbError) cbError(error);
        else defaultHttpError(error);
      },
    });
  };

  return {
    execute: executeAction,
    isLoading,
    response,
    error,
  };
};
