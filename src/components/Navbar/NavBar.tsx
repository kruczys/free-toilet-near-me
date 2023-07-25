import { IconContext } from "react-icons";
import AboutModal from "./AboutModal";
import AccountModal from "./AccountModal";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <IconContext.Provider value={{ size: "1.5em" }}>
      <div className="flex items-center gap-2 bg-slate-50 px-1 py-4 shadow-md sm:px-5">
        <h1 className="font-bold text-orange-900 sm:text-3xl sm:tracking-wide">
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
