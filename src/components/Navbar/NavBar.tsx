import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div className="flex items-center px-5 py-4 shadow-md bg-slate-50">
      <h1 className="text-3xl font-bold tracking-wide text-orange-900">
        FreeToilet
      </h1>
      <SearchBar
        onSubmit={(locationText) => console.log(locationText)}
      ></SearchBar>
    </div>
  );
};

export default NavBar;
