import { Popup } from "react-leaflet";
import { FaToilet } from "react-icons/fa";

const CustomPopup = ({ geolocation, name, rating, isFree }) => {
  return (
    <Popup>
      <div className="flex-col gap-8">
        <h2 className="text-xl">{name}</h2>
        <p>{isFree ? "Free" : "Not Free"}</p>
        <p>{rating * 100}%</p>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${geolocation[0]}%2C${geolocation[1]}`}
          className="underline"
          target="_blank"
        >
          Directions
        </a>
        <a href="/" className="block underline">
          Rate
        </a>
      </div>
    </Popup>
  );
};

export default CustomPopup;
