// libs
import { AxiosError } from "axios";
// others
import { notify } from "@/utils/notify";

/**
 * defaultHttpError
 * @param error
 */
export function defaultHttpError(error: AxiosError) {
  const errorMsg =
    error.response?.data?.message ||
    error.response?.data?.error?.message ||
    error.message ||
    "Unknown Error";
  if (typeof errorMsg !== "string")
  throw Error("Error Notify is an object, in src/https/index");
  notify.error(errorMsg);
}

/**
 * defaultHttpSuccess
 */
export function defaultHttpSuccess() {
  notify.success("Success");
}
