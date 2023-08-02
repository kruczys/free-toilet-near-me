import { Marker } from "react-leaflet";
import CustomPopup from "./CustomPopup.tsx";

const CustomMarker = ({ geolocation, name, rating, isFree, type }) => {
  return (
    <Marker position={{ lat: geolocation[0], lng: geolocation[1] }}>
      {type === "popup" ? (
        <CustomPopup
          geolocation={geolocation}
          name={name}
          rating={rating}
          isFree={isFree}
        />
      ) : null}
    </Marker>
  );
};

export default CustomMarker;
