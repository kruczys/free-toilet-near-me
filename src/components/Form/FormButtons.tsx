import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const FormButtons = ({ children }: Props) => {
  const buttonStyles = "rounded bg-orange-900 px-2 py-1 text-white";

  return (
    <div className="flex justify-around">
      <button
        type="button"
        className={buttonStyles}
        onClick={() =>
          document.querySelector<HTMLDialogElement>("dialog")?.close()
        }
      >
        Cancel
      </button>
      <button type="submit" className={buttonStyles}>
        {children}
      </button>
    </div>
  );
};

export default FormButtons;
