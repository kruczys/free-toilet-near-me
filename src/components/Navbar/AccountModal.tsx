import { BsFillPersonFill } from "react-icons/bs";
import Modal from "../common/Modal";
import UserForms from "./UserForms";

const AccountModal = () => {
  const isUserLoggedIn = false;
  // TODO: future hook

  return (
    <Modal
      buttonContent={
        <>
          <BsFillPersonFill />
          <span className="hidden sm:block">
            {isUserLoggedIn ? "userData" : "Login"}
          </span>
        </>
      }
      buttonAriaLabel={isUserLoggedIn ? "userData" : "Login"}
    >
      {isUserLoggedIn ? "account modal" : <UserForms />}
    </Modal>
  );
};

export default AccountModal;
