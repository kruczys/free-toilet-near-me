import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import GeocodingData from "../entities/GeocodingData";
import geocodingClient from "../services/geocodingClient";

const useLocationGeoData = (locationQuery: string) =>
  useQuery<GeocodingData[], AxiosError>({
    queryKey: ["location", locationQuery],
    queryFn: () =>
      geocodingClient.getAll({
        params: {
          q: locationQuery || "Gdansk",
        },
      }),
  });

export default useLocationGeoData;
