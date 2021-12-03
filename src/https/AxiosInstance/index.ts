// libs
import axios from "axios";

export const AXIOS_INSTANCE = axios.create({
  // TODO: Use env variables for baseURL instead of hard code
  baseURL: "http://timekeeping.cssdemoco.com/api",
});
