import { create } from "zustand";
import defaultLocation, { DefaultLocation } from "./data/defaultLocation";
import GeocodingData from "./entities/GeocodingData";

interface GlobalStore {
  currentLocation: GeocodingData | DefaultLocation;
  setCurrentLocation: (currentLocation: GeocodingData) => void;
}

const useGlobalStore = create<GlobalStore>((set) => ({
  currentLocation: defaultLocation,
  setCurrentLocation: (currentLocation: GeocodingData) =>
    set((state) => ({ ...state, currentLocation })),
}));

export default useGlobalStore;
