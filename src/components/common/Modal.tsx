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
    const dialogDimensions = e.currentTarget.getBoundingClientRect();

    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      e.currentTarget.close();
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
        className="p-4 text-xl shadow-md sm:px-8"
        onMouseDown={(e) => handleDialogClose(e)}
      >
        {children}
      </dialog>
    </>
  );
};

export default Modal;
