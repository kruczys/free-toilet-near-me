import { useRef } from "react";
import { IconContext } from "react-icons";
import { BsFillKeyFill, BsFillPersonFill } from "react-icons/bs";

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
        <form>
          <div className="mb-4">
            <label htmlFor="loginInput" className="block mb-1">
              <div className="flex items-center gap-1">
                <BsFillPersonFill></BsFillPersonFill>
                Login
              </div>
            </label>
            <input
              type="text"
              name="loginInput"
              id="loginInput"
              className="border-2 border-black rounded px-2 py-1 focus:rounded focus:outline-none focus:border-orange-900"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="passwordInput" className="block mb-1">
              <div className="flex items-center gap-1">
                <BsFillKeyFill></BsFillKeyFill>
                Password
              </div>
            </label>
            <input
              type="password"
              name="passwordInput"
              id="passwordInput"
              className="border-2 border-black rounded px-2 py-1 focus:rounded focus:outline-none focus:border-orange-900"
            />
          </div>
          <div className="flex justify-around">
            <button
              type="submit"
              formMethod="dialog"
              onClick={() => dialog.current?.close()}
              className="bg-orange-900 px-2 py-1 text-white rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-orange-900 px-2 py-1 text-white rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </dialog>
    </IconContext.Provider>
  );
};

export default AccountModal;
