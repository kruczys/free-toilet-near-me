import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const FormButtons = ({ children }: Props) => {
  return (
    <div className="flex justify-around">
      <button
        type="button"
        className="rounded bg-orange-900 px-2 py-1 text-white"
        onClick={() =>
          document.querySelector<HTMLDialogElement>(".modal")?.close()
        }
      >
        Cancel
      </button>
      <button
        type="submit"
        className="rounded bg-orange-900 px-2 py-1 text-white"
      >
        {children}
      </button>
    </div>
  );
};

export default FormButtons;
