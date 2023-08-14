import axios, { AxiosRequestConfig } from "axios";

interface putQueryItem<T, P = void> {
  itemId: string;
  item: T | P;
}

class ApiClient<T, P = void> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) =>
    axios.get<T[]>(this.endpoint, config).then(({ data }) => data);

  getById = (itemId: string, config?: AxiosRequestConfig) =>
    axios.get<T>(`${this.endpoint}/${itemId}`, config).then(({ data }) => data);

  post = (item: T | P) =>
    axios.post<T>(this.endpoint, item).then(({ data }) => data);

  put = ({ itemId, item }: putQueryItem<T, P>) =>
    axios.put<T>(`${this.endpoint}/${itemId}`, item).then(({ data }) => data);

  delete = (itemId: string) =>
    axios.delete<T>(`${this.endpoint}/${itemId}`).then(({ data }) => data);
}

export default ApiClient;
