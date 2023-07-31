import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

const MainMap = () => {
  const cords = [54.38528573727253, 18.609002982471225];

  return (
    <MapContainer center={cords} zoom={13} className="h-96">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={cords}>
        <Popup>Test Popup</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MainMap;
