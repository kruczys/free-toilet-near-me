import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import defaultLocation from "../data/defaultLocation";
import GeocodingData from "../entities/GeocodingData";
import { geocodingClient } from "../services/geocodingClient";
import ms from "ms";

const useGeocoding = (locationQuery: string) => {
  const query = locationQuery || defaultLocation.name;

  return useQuery<GeocodingData[], AxiosError>({
    queryKey: ["location", query],
    queryFn: () =>
      geocodingClient.getAll({
        params: {
          q: query,
        },
      }),
    staleTime: ms("1d"),
  });
};

export default useGeocoding;
