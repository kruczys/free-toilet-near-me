import { Popup } from "react-leaflet";

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
        >
          Directions
        </a>
        <p className="text-[#0891b2] underline">Rate</p>
      </div>
    </Popup>
  );
};

export default CustomPopup;
