import { useRef } from "react";

import { BsFillPersonFill } from "react-icons/bs";
import UserForms from "./UserForms";

interface Props {
  isUserLoggedIn: boolean;
}

const AccountModal = ({ isUserLoggedIn }: Props) => {
  const dialog = useRef<HTMLDialogElement>(null);

  const handleDialogClose = (
    e: React.MouseEvent<HTMLDialogElement, MouseEvent>,
  ) => {
    if (!dialog.current) return;

    const dialogDimensions = dialog.current.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      dialog.current.close();
    }
  };

  return (
    <>
      <button
        onClick={() => dialog.current?.showModal()}
        className="flex items-center gap-1"
      >
        <BsFillPersonFill></BsFillPersonFill>
        {isUserLoggedIn ? "userData" : "Login"}
      </button>
      <dialog
        ref={dialog}
        className="shadow-md p-8 text-xl"
        onClick={(e) => handleDialogClose(e)}
      >
        {isUserLoggedIn ? (
          "account modal"
        ) : (
          <UserForms onCloseForm={() => dialog.current?.close()}></UserForms>
        )}
      </dialog>
    </>
  );
};

export default AccountModal;
