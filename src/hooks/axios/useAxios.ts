import { useState, useEffect } from "react";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { ResponseProps } from "@/models/Axios/Axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
const token = process.env.REACT_APP_TOKEN_API;
export const config = {
    headers: { Authorization: `Bearer ${token}` },
};

export const useAxios = (axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<ResponseProps|null>(null);
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(
    axiosParams.method === "GET" || axiosParams.method === "get",
  );

  // eslint-disable-next-line no-param-reassign
  axiosParams.headers = { ...config.headers, ...axiosParams.headers };

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const result = await axios.request(params);
      setResponse(result.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const sendData = () => {
    fetchData(axiosParams);
  };

  useEffect(() => {
    if (axiosParams.method === "GET" || axiosParams.method === "get") {
      fetchData(axiosParams);
    }
  }, []);

  return { response, error, loading, sendData };
};
