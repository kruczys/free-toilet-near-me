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
    <form onSubmit={handleSubmit} className="relative flex w-full items-center">
      <button
        type="submit"
        className="absolute cursor-pointer pl-2"
        aria-label="search"
      >
        <ImSearch></ImSearch>
      </button>
      <input
        ref={locationSearch}
        className="w-full rounded-xl border-2 px-2 py-1 pl-9"
        type="text"
        name="locationSearch"
        id="locationSearch"
        placeholder="type your location here..."
      />
    </form>
  );
};

export default SearchBar;
