import { useForm } from "react-hook-form";
import { ImSearch } from "react-icons/im";
import useGlobalStore from "../../store";

interface SearchBar {
  locationSearch: string;
}

const SearchBar = () => {
  const setLocationQuery = useGlobalStore((s) => s.setLocationQuery);
  const { register, handleSubmit } = useForm<SearchBar>();

  const submitAction = (data: SearchBar) => {
    setLocationQuery(data.locationSearch.toLocaleLowerCase());
  };

  return (
    <form
      onSubmit={handleSubmit(submitAction)}
      className="relative flex w-full items-center"
    >
      <button
        type="submit"
        className="absolute cursor-pointer pl-2"
        aria-label="search"
      >
        <ImSearch />
      </button>
      <input
        {...register("locationSearch")}
        className="w-full rounded-xl border-2 px-2 py-1 pl-9 focus:border-black focus:outline-none"
        type="text"
        id="locationSearch"
        placeholder="type your location here..."
      />
    </form>
  );
};

export default SearchBar;
