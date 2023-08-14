import { useMapEvents } from "react-leaflet";

const MapControl = () => {
  // future cords from state for panTo method

  const map = useMapEvents({
    zoomlevelschange: () => {
      map.locate();
    },
    locationfound: (location) => {
      map.panTo(location.latlng);
    },
  });

  return null;
};

export default MapControl;
