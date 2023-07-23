import { BsFillPersonFill } from "react-icons/bs";
import Modal from "../common/Modal";
import UserForms from "./UserForms";

interface Props {
  isUserLoggedIn: boolean;
}

const AccountModal = ({ isUserLoggedIn }: Props) => {
  return (
    <Modal
      buttonContent={
        <>
          <BsFillPersonFill></BsFillPersonFill>
          {isUserLoggedIn ? "userData" : "Login"}
        </>
      }
    >
      {isUserLoggedIn ? "account modal" : <UserForms></UserForms>}
    </Modal>
  );
};

export default AccountModal;
