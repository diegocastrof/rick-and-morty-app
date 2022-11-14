import axiosClient from "config/axios";
import { AxiosPromise } from "services/types/api";

class ApiService {
  static get = <Response>(url: string): AxiosPromise<Response> => {
    return axiosClient.get(url);
  };
}

export default ApiService;
