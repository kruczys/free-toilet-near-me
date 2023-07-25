import { FormEvent, useRef } from "react";
import { ImSearch } from "react-icons/im";

interface Props {
  onSubmit: (locationText: string) => void;
}

const SearchBar = ({ onSubmit }: Props) => {
  const locationSearch = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const locationText = locationSearch.current?.value;
    if (locationText) onSubmit(locationText);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full relative"
      style={{ left: "-0.75rem" }}
    >
      <button
        type="submit"
        className="relative left-9 cursor-pointer"
        onSubmit={handleSubmit}
        aria-label="search"
      >
        <ImSearch></ImSearch>
      </button>
      <input
        ref={locationSearch}
        className="rounded-xl border-2 pl-11 pr-3 py-1 w-full"
        type="text"
        name="locationSearch"
        id="locationSearch"
        placeholder="type your location here..."
      />
    </form>
  );
};

export default SearchBar;
