import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import defaultLocation from "../data/defaultLocation";
import GeocodingData from "../entities/GeocodingData";
import geocodingClient from "../services/geocodingClient";

const useLocationGeoData = (locationQuery: string) => {
  const query = locationQuery || defaultLocation.name;

  return useQuery<GeocodingData[], AxiosError>({
    queryKey: ["location", query],
    queryFn: () =>
      geocodingClient.getAll({
        params: {
          q: query,
        },
      }),
  });
};

export default useLocationGeoData;
