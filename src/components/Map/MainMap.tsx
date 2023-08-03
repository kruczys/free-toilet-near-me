import { MapContainer, TileLayer } from "react-leaflet";
import CustomMarker from "./CustomMarker.tsx";
import * as toiletData from "../../Data/kibelinfo.json";
import FaToilet from "react-icons/fa";

const MainMap = () => {
  const centerCords = [54.38528573727253, 18.609002982471225];

  return (
    <MapContainer
      center={{ lat: centerCords[0], lng: centerCords[1] }}
      zoom={12}
      className="h-screen"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {toiletData.toilets.map((toilet) => (
        <CustomMarker
          key={toilet.id}
          geolocation={toilet.geolocation}
          name={toilet.name}
          rating={toilet.rating}
          isFree={toilet.isFree}
          type="popup"
        />
      ))}
    </MapContainer>
  );
};

export default MainMap;
