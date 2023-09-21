import { ChangeEvent, FormEvent, useState } from "react";
import { ImSearch } from "react-icons/im";
import { useDebounce } from "use-debounce";
import useGlobalStore from "../../globalStore";
import useGeocoding from "../../hooks/useGeocoding";

const SearchBar = () => {
  const [isSearchInputFocused, setIsSearchInputFocused] = useState(false);
  const [locationQuery, setLocationQuery] = useState("");
  const [debouncedLocationQuery] = useDebounce(locationQuery, 100); // FIXME: consider increasing

  const setCurrentLocation = useGlobalStore((s) => s.setCurrentLocation);
  const { data: locations } = useGeocoding(debouncedLocationQuery);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.toLocaleLowerCase();
    if (input && input.length > 1) setLocationQuery(input);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (locations && locations[0]) {
      setCurrentLocation(locations[0]);
      setLocationQuery("");
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const selectedPlaceId = e.currentTarget.getAttribute("data-place-id");
    const selectedLocation = locations?.find(
      (loc) => loc.place_id === parseInt(selectedPlaceId || ""),
    );

    if (selectedLocation) {
      setCurrentLocation(selectedLocation);
      setLocationQuery("");
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setIsSearchInputFocused(true);
    const input = e.target.value.toLocaleLowerCase();
    setLocationQuery(input);
  };

  // TODO: ogarnac strzalki w dropdown

  const showSearchResults = isSearchInputFocused && !!locationQuery;

  return (
    <div className="relative ml-1 flex w-full flex-col justify-center">
      <form onSubmit={handleSubmit} className="flex items-center">
        <button
          type="submit"
          className="absolute cursor-pointer pl-2"
          aria-label="search"
        >
          <ImSearch />
        </button>
        <input
          onChange={handleChange}
          onFocus={handleFocus}
          className="w-full rounded-xl border-2 py-1 pl-10 pr-3 focus:border-black focus:outline-none"
          type="text"
          placeholder="type your location here..."
        />
      </form>
      {showSearchResults && (
        <div className="absolute inset-x-0 top-9 z-10 mx-auto cursor-pointer divide-y  divide-gray-400 rounded-sm bg-white px-3 py-1 text-sm">
          {locations?.map((loc) => (
            <button
              key={loc.place_id}
              data-place-id={loc.place_id.toString()}
              className="w-full px-1 py-2 text-left hover:bg-slate-100"
              onClick={handleClick}
            >
              {loc.display_name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
