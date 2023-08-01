import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
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
          <Popup>
            <h2 className="text-xl">{toilet.name}</h2>
            <p>{toilet.isFree ? "Free to use" : "Pay to use"}</p>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${toilet.geolocation[0]}%2C${toilet.geolocation[1]}`}
            >
              Directions
            </a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MainMap;
