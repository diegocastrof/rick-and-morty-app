import { AxiosRequestConfig } from "axios";

const request = (config: AxiosRequestConfig): AxiosRequestConfig => {
  return {
    ...config,
    headers: {
      ...config.headers,
      "Content-Type": "application/json",
    },
  };
};

export default {
  request,
};
