import { useRef } from "react";
import { IconContext } from "react-icons";
import { BsFillPersonFill } from "react-icons/bs";
import LoginForm from "./LoginForm";

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
    <IconContext.Provider value={{ size: "1.5em" }}>
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
        <LoginForm onCloseForm={() => dialog.current?.close()}></LoginForm>
      </dialog>
    </IconContext.Provider>
  );
};

export default AccountModal;
