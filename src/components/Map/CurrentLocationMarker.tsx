import { Marker } from "react-leaflet";
import useGlobalStore from "../../globalStore";

const CurrentLocationMarker = () => {
  const currentLocation = useGlobalStore((s) => s.currentLocation);
  if (!currentLocation.lat && !currentLocation.lon) return null;

  return (
    <Marker position={{ lat: currentLocation.lat, lng: currentLocation.lon }} />
  );
};

export default CurrentLocationMarker;
