import { Popup } from "react-leaflet";

const CustomPopup = ({ geolocation, name, rating, isFree }) => {
  return (
    <Popup>
      <div className="flex-col">
        <h2 className="text-xl">{name}</h2>
        <p>{isFree ? "Free to use" : "Pay to use"}</p>
        <p>{rating * 100}%</p>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${geolocation[0]}%2C${geolocation[1]}`}
          className="underline"
        >
          Directions
        </a>
      </div>
    </Popup>
  );
};

export default CustomPopup;
