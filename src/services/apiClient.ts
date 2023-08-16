import { AxiosInstance, AxiosRequestConfig } from "axios";

interface putQueryItem<T, P = void> {
  itemId: string;
  item: T | P;
}

class ApiClient<T, P = void> {
  axiosInstance: AxiosInstance;
  endpoint: string;

  constructor(axiosInstance: AxiosInstance, endpoint: string) {
    this.axiosInstance = axiosInstance;
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) =>
    this.axiosInstance.get<T[]>(this.endpoint, config).then(({ data }) => data);

  getById = (itemId: string, config?: AxiosRequestConfig) =>
    this.axiosInstance
      .get<T>(`${this.endpoint}/${itemId}`, config)
      .then(({ data }) => data);

  post = (item: T | P, config?: AxiosRequestConfig) =>
    this.axiosInstance
      .post<T>(this.endpoint, item, config)
      .then(({ data }) => data);

  put = ({ itemId, item }: putQueryItem<T, P>, config?: AxiosRequestConfig) =>
    this.axiosInstance
      .put<T>(`${this.endpoint}/${itemId}`, item, config)
      .then(({ data }) => data);

  delete = (itemId: string, config?: AxiosRequestConfig) =>
    this.axiosInstance
      .delete<T>(`${this.endpoint}/${itemId}`, config)
      .then(({ data }) => data);
}

export default ApiClient;
