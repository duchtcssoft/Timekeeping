// libs
import axios from "axios";

export const AXIOS_INSTANCE = axios.create({
  // TODO: Use env variables for baseURL instead of hard code
  baseURL: "http://timekeeping.cssdemoco.com",
});
// FIXME: Why there is a BASE_URL export here
export const BASE_URL = "http://timekeeping.cssdemoco.com";
