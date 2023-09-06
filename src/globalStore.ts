import { create } from "zustand";

interface GlobalStore {
  locationQuery: string;
  setLocationQuery: (locationQuery: string) => void;
}

const useGlobalStore = create<GlobalStore>((set) => ({
  locationQuery: "",
  setLocationQuery: (locationQuery: string) =>
    set((state) => ({ ...state, locationQuery })),
}));

export default useGlobalStore;
