import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import ms from "ms";
import GeocodingData from "../entities/GeocodingData";
import { geocodingClient } from "../services/geocodingClient";

const useGeocoding = (locationQuery: string) => {
  const query = locationQuery.toLocaleLowerCase() || "";

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
