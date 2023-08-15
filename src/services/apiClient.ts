import axios, { AxiosRequestConfig } from "axios";

interface putQueryItem<T, P = void> {
  itemId: string;
  item: T | P;
}

const axiosInstance = axios.create({
  baseURL: "http://api.openweathermap.org",
  params: {
    appid: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
  },
});

class ApiClient<T, P = void> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) =>
    axiosInstance.get<T[]>(this.endpoint, config).then(({ data }) => data);

  getById = (itemId: string, config?: AxiosRequestConfig) =>
    axiosInstance
      .get<T>(`${this.endpoint}/${itemId}`, config)
      .then(({ data }) => data);

  post = (item: T | P) =>
    axiosInstance.post<T>(this.endpoint, item).then(({ data }) => data);

  put = ({ itemId, item }: putQueryItem<T, P>) =>
    axiosInstance
      .put<T>(`${this.endpoint}/${itemId}`, item)
      .then(({ data }) => data);

  delete = (itemId: string) =>
    axiosInstance
      .delete<T>(`${this.endpoint}/${itemId}`)
      .then(({ data }) => data);
}

export default ApiClient;
