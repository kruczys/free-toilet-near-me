import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import * as toiletData from "../../Data/kibelinfo.json";
import CustomMarker from "./CustomMarker.tsx";

const MainMap = () => {
  const startingCords = {
    lat: 54.38528573727253,
    lng: 18.609002982471225,
  };

  return (
    <MapContainer center={startingCords} zoom={12} zoomControl={false} className="h-full">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {toiletData.toilets.map((toilet) => (
        <CustomMarker key={toilet.id} {...toilet} />
      ))}
      <ZoomControl position="bottomright" />
    </MapContainer>
  );
};

export default MainMap;
