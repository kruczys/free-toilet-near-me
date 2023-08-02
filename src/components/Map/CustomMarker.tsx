import { Marker } from "react-leaflet";
import CustomPopup from "./CustomPopup.tsx";

const CustomMarker = ({ id, geolocation, name, rating, isFree }) => {
  return (
    <Marker key={id} position={{ lat: geolocation[0], lng: geolocation[1] }}>
      <CustomPopup
        geolocation={geolocation}
        name={name}
        rating={rating}
        isFree={isFree}
      />
    </Marker>
  );
};

export default CustomMarker;
