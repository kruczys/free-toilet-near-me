import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import defaultLocation from "../../data/defaultLocation.ts";
import * as toiletData from "../../data/kibelinfo.json";
import CurrentLocationMarker from "./CurrentLocationMarker.tsx";
import LocateMe from "./LocateMe.tsx";
import MapControl from "./MapControl.tsx";
import CustomMarker from "./ToiletMarker.tsx";

const MainMap = () => {
  const startingCords = {
    lat: defaultLocation.lat,
    lng: defaultLocation.lon,
  };

  return (
    <MapContainer
      center={startingCords}
      zoom={12}
      zoomControl={false}
      className="z-0 h-full"
    >
      <CurrentLocationMarker />
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
