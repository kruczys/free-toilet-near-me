import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MainMap = () => {
  const testCords1 = [54.396244853612004, 18.57431564599356];
  const testCords2 = [54.423398828203716, 18.594126803452735];
  const centerCords = [54.38528573727253, 18.609002982471225];
  const cords = [testCords1, testCords2];

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
      {cords.map((cord) => (
        <Marker position={{ lat: cord[0], lng: cord[1] }}>
          <Popup>
            {cord[0]} {cord[1]}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MainMap;
