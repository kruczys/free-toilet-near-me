import { BsFillPersonFill } from "react-icons/bs";
import Modal from "../common/Modal";
import UserForms from "./UserForms";

const AccountModal = () => {
  const isUserLoggedIn = false;
  // future hook

  return (
    <Modal
      buttonContent={
        <>
          <BsFillPersonFill></BsFillPersonFill>
          <span className="hidden sm:block">
            {isUserLoggedIn ? "userData" : "Login"}
          </span>
        </>
      }
      buttonAriaLabel={isUserLoggedIn ? "userData" : "Login"}
    >
      {isUserLoggedIn ? "account modal" : <UserForms></UserForms>}
    </Modal>
  );
};

export default AccountModal;
