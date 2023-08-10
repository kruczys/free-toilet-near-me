import { IconContext } from "react-icons";
import AboutModal from "./AboutModal";
import AccountModal from "./AccountModal";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <IconContext.Provider value={{ size: "1.5em" }}>
      <div className="flex items-center gap-2 bg-slate-50 px-1 py-4 shadow-md sm:px-5">
        <Logo />
        <SearchBar />
        <AccountModal />
        <AboutModal></AboutModal>
      </div>
    </IconContext.Provider>
  );
};

export default NavBar;
