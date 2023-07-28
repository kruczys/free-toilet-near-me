import { MapContainer } from "https://cdn.esm.sh/react-leaflet/MapContainer";
import { TileLayer } from "https://cdn.esm.sh/react-leaflet/TileLayer";
// import { useMap } from "https://cdn.esm.sh/react-leaflet/hooks";

const MainMap = () => {
  const cords = [54.38528573727253, 18.609002982471225];

  return (
    <MapContainer
      center={cords}
      zoom={13}
      scrollWheelZoom={false}
      className="h-80"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default MainMap;
