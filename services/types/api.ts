import { AxiosResponse } from "axios";

export type AxiosPromise<T> = Promise<AxiosResponse<T>>;
