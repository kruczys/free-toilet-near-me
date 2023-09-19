import { ChangeEvent, FormEvent, useState } from "react";
import { ImSearch } from "react-icons/im";
import { useDebounce } from "use-debounce";
import useGlobalStore from "../../globalStore";
import useLocationGeoData from "../../hooks/useLocationGeoData";

const SearchBar = () => {
  const [locationQuery, setLocationQuery] = useState("");
  const [debouncedLocationQuery] = useDebounce(locationQuery, 500);

  const { data: locationGeoData } = useLocationGeoData(debouncedLocationQuery);
  const setCurrentLocation = useGlobalStore((s) => s.setCurrentLocation);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setLocationQuery(e.target.value.toLocaleLowerCase());

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (locationGeoData) setCurrentLocation(locationGeoData[0]); // temporary selecting always first result from api
  };

  return (
    <form onSubmit={handleSubmit} className="ml-1 flex w-full items-center">
      <button
        type="submit"
        className="absolute cursor-pointer pl-2"
        aria-label="search"
      >
        <ImSearch />
      </button>
      <input
        onChange={handleChange}
        className="w-full rounded-xl border-2 py-1 pl-10 pr-3 focus:border-black focus:outline-none"
        type="text"
        placeholder="type your location here..."
      />
    </form>
  );
};

export default SearchBar;
