import { MapContainer, TileLayer } from "react-leaflet";
import CustomMarker from "./CustomMarker.tsx";
import * as toiletData from "../../Data/kibelinfo.json";
import FaToilet from "react-icons/fa";

const MainMap = () => {
  const defaultCords = {
    lat: 54.38528573727253,
    lng: 18.609002982471225,
  }

  return (
    
    <MapContainer
      center={defaultCords}
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
          price={toilet.price}
          type="popup"
        />
      ))}
    </MapContainer>
  );
};

export default MainMap;
