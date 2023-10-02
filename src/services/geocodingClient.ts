import axios from "axios";
import GeocodingData from "../entities/GeocodingData";
import ApiClient from "./apiClient";

const axiosInstance = axios.create({
  baseURL: "https://geocode.maps.co",
});

export const geocodingClient = new ApiClient<GeocodingData>(
  axiosInstance,
  "search",
);
