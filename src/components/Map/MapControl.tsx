import { useMap, useMapEvents } from "react-leaflet";
import useGlobalStore from "../../globalStore";

const MapControl = () => {
  const currentLocation = useGlobalStore((s) => s.currentLocation);

  const map = useMap();
  if (location)
    map.panTo({ lat: currentLocation.lat, lng: currentLocation.lon });

  const mapEvents = useMapEvents({
    zoomlevelschange: () => {
      mapEvents.locate();
    },
    locationfound: (location) => {
      mapEvents.panTo(location.latlng);
    },
  });

  return null;
};

export default MapControl;
