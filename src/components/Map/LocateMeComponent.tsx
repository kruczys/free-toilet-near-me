import { useState } from "react";
import { useMapEvents } from "react-leaflet";
import { Marker } from "react-leaflet";

const locateMeComponent = () => {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : <Marker position={position}></Marker>;
};

export default locateMeComponent;
