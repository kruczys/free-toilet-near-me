import { IconContext } from "react-icons";
import AboutModal from "./AboutModal";
import AccountModal from "./AccountModal";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <IconContext.Provider value={{ size: "1.5em" }}>
      <div className="flex items-center px-5 py-4 shadow-md bg-slate-50">
        <h1 className="sm:text-3xl font-bold tracking-wide text-orange-900">
          FreeToilet
        </h1>
        <SearchBar
          onSubmit={(locationText) => console.log(locationText)}
        ></SearchBar>
        <AccountModal isUserLoggedIn={false}></AccountModal>
        <AboutModal></AboutModal>
      </div>
    </IconContext.Provider>
  );
};

export default NavBar;
