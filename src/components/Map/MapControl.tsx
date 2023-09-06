import { useMap, useMapEvents } from "react-leaflet";
import useGlobalStore from "../../globalStore";
import useLocationGeoData from "../../hooks/useLocationGeoData";

const MapControl = () => {
  const locationQuery = useGlobalStore((s) => s.locationQuery);
  const { data: location } = useLocationGeoData(locationQuery);
  const map = useMap();
  if (location) map.panTo({ lat: location[0].lat, lng: location[0].lon });

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
