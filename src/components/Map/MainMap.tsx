import { MapContainer, TileLayer, Marker } from "react-leaflet";
import CustomPopup from "./CustomPopup.tsx";
import * as toiletData from "../../Data/kibelinfo.json";

const MainMap = () => {
  const centerCords = [54.38528573727253, 18.609002982471225];

  return (
    <MapContainer
      center={{ lat: centerCords[0], lng: centerCords[1] }}
      zoom={13}
      className="h-screen"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {toiletData.toilets.map((toilet) => (
        <Marker
          key={toilet.id}
          position={{ lat: toilet.geolocation[0], lng: toilet.geolocation[1] }}
        >
          <CustomPopup
            geolocation={toilet.geolocation}
            name={toilet.name}
            rating={toilet.rating}
            isFree={toilet.isFree}
          />
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MainMap;
