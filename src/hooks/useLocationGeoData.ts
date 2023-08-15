import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import GeocodingData from "../entities/GeocodingData";
import geocodingClient from "../services/geocodingClient";

const useLocationGeoData = (query: string) =>
  useQuery<GeocodingData[], AxiosError>({
    queryKey: ["location", query],
    queryFn: () =>
      geocodingClient.getAll({
        params: {
          q: query,
        },
      }),
    enabled: false,
    refetchOnWindowFocus: false,
  });

export default useLocationGeoData;
