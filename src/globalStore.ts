import { create } from "zustand";
import GeocodingData from "./entities/GeocodingData";

interface GlobalStore {
  currentLocation: GeocodingData;
  setCurrentLocation: (currentLocation: GeocodingData) => void;
}

const useGlobalStore = create<GlobalStore>((set) => ({
  currentLocation: {} as GeocodingData,
  setCurrentLocation: (currentLocation: GeocodingData) =>
    set((state) => ({ ...state, currentLocation })),
}));

export default useGlobalStore;
