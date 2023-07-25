import { ReactNode, useRef } from "react";

interface Props {
  buttonContent: ReactNode;
  buttonAriaLabel?: string;
  children: ReactNode;
}

const Modal = ({ buttonContent, buttonAriaLabel, children }: Props) => {
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
        aria-label={buttonAriaLabel}
      >
        {buttonContent}
      </button>
      <dialog
        ref={dialog}
        className="shadow-md p-4 sm:px-8 text-xl modal"
        onClick={(e) => handleDialogClose(e)}
      >
        {children}
      </dialog>
    </>
  );
};

export default Modal;
