import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import * as toiletData from "../../data/kibelinfo.json";
import LocateMe from "./LocateMe.tsx";
import MapControl from "./MapControl.tsx";
import CustomMarker from "./ToiletMarker.tsx";

const MainMap = () => {
  const startingCords = {
    lat: 54.3706858,
    lng: 18.61298210330077,
  };

  return (
    <MapContainer
      center={startingCords}
      zoom={12}
      zoomControl={false}
      className="h-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {toiletData.toilets.map((toilet) => (
        <CustomMarker key={toilet.id} {...toilet} />
      ))}
      <ZoomControl position="bottomright" />
      <LocateMe position="topright" />
      <MapControl />
    </MapContainer>
  );
};

export default MainMap;
