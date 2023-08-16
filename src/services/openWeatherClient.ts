import axios from "axios";
import GeocodingData from "../entities/GeocodingData";
import ApiClient from "./apiClient";

const axiosInstance = axios.create({
  baseURL: "http://api.openweathermap.org",
  params: {
    appid: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
    limit: "1",
  },
});

export const geocodingClient = new ApiClient<GeocodingData>(
  axiosInstance,
  "geo/1.0/direct",
);
