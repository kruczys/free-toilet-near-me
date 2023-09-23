import { useMap, useMapEvents } from "react-leaflet";
import useGlobalStore from "../../globalStore";

const MapControl = () => {
  const currentLocation = useGlobalStore((s) => s.currentLocation);
  const map = useMap();
  const mapEvents = useMapEvents({
    zoomlevelschange: () => {
      mapEvents.locate();
    },
    locationfound: (location) => {
      mapEvents.panTo(location.latlng);
    },
  });

  if (currentLocation.lat && currentLocation.lon)
    map.panTo({ lat: currentLocation.lat, lng: currentLocation.lon });

  return null;
};

export default MapControl;
