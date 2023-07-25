import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const FormButtons = ({ children }: Props) => {
  return (
    <div className="flex justify-around">
      <button
        type="button"
        className="bg-orange-900 px-2 py-1 text-white rounded"
        onClick={() =>
          document.querySelector<HTMLDialogElement>(".modal")?.close()
        }
      >
        Cancel
      </button>
      <button
        type="submit"
        className="bg-orange-900 px-2 py-1 text-white rounded"
      >
        {children}
      </button>
    </div>
  );
};

export default FormButtons;
