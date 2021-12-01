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
    error.response?.data?.error ||
    error.message ||
    "Unknown Error";
  notify.error(errorMsg);
}

/**
 * defaultHttpSuccess
 */
export function defaultHttpSuccess() {
  notify.success("Success");
}
