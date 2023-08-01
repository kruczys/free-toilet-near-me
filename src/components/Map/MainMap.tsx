import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MainMap = () => {
  const markers = [
    {
      geolocation: { lat: 54.3829624299007, lng: 18.60546116887902 },
      popup: "This will be a beatiful component",
    },
    {
      geolocation: { lat: 54.378195185098654, lng: 18.606956602949094 },
      popup: "This will be a beatiful component",
    },
  ];
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
      {markers.map((marker) => (
        <Marker position={marker.geolocation}>
          <Popup>{marker.popup}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MainMap;
