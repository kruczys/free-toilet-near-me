import { Marker } from "react-leaflet";
import defaultLocation from "../../data/defaultLocation";
import useGlobalStore from "../../globalStore";

const CurrentLocationMarker = () => {
  const currentLocation = useGlobalStore((s) => s.currentLocation);
  if (currentLocation === defaultLocation) return null;

  return (
    <Marker position={{ lat: currentLocation.lat, lng: currentLocation.lon }} />
  );
};

export default CurrentLocationMarker;
