import GeocodingData from "../entities/GeocodingData";
import ApiClient from "./apiClient";

const geocodingClient = new ApiClient<GeocodingData>("geo/1.0/direct");

export default geocodingClient;
