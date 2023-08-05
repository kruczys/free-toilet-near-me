import { Icon } from "leaflet";
import { BiFlag, BiMap } from "react-icons/bi";
import { Marker, Popup } from "react-leaflet";
import { Rating } from "react-simple-star-rating";
import Toilet from "../../Entities/Toilet.js";
import toiletIcon from "../../assets/Icons/toilet.svg";

const CustomMarker = ({
  geolocation: { lat, lng },
  name,
  rating,
  price,
}: Toilet) => {
  const markerIcon = new Icon({
    iconUrl: toiletIcon,
    iconSize: [40, 40],
    className: "bg-white rounded",
  }); // TODO: add some padding or change icon

  return (
    <Marker position={{ lat, lng }} icon={markerIcon}>
      <Popup>
        <h2 className="text-xl mb-1 font-bold">{name}</h2>
        <div>{price === 0 ? "Free" : `${price} PLN`}</div>
        <div>
          <Rating
            size={25}
            allowFraction={true}
            SVGstyle={{ display: "inline" }}
            initialValue={rating !== 0 ? rating : 0}
            transition={true}
          />
        </div>
        <div className="flex justify-around mt-2">
          <div>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${lat}%2C${lng}`}
              className="flex items-center"
              target="_blank"
            >
              <BiMap />
              Guide Me
            </a>
          </div>
          <div>
            <button className="flex items-center text-red-400">
              <BiFlag />
              Report
            </button>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default CustomMarker;
