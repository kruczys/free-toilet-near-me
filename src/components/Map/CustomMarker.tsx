import { Marker, Popup } from "react-leaflet";
import Toilet from "../../Entities/Toilet.ts";

const CustomMarker = ({
  geolocation: { lat, lng },
  name,
  rating,
  price,
}: Toilet) => {
  return (
    <Marker position={{ lat, lng }}>
      <Popup>
        <h2 className="text-xl">{name}</h2>
        <div>{price === 0 ? "Free" : `${price} PLN`}</div>
        <div>{rating}</div>
        <div className="flex justify-around">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${lat}%2C${lng}`}
            className="underline"
            target="_blank"
          >
            Guide Me
          </a>
          <a href="/" className="block underline">
            Report
          </a>
        </div>
      </Popup>
    </Marker>
  );
};

export default CustomMarker;
