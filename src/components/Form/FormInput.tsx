import { HTMLInputTypeAttribute, ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  formRegister: UseFormRegisterReturn;
  id: string;
  type: HTMLInputTypeAttribute;
  errorMessage?: string;
  onChange?: (value: string) => void;
  children: ReactNode;
}

const FormInput = ({
  formRegister,
  id,
  type,
  errorMessage,
  onChange,
  children,
}: Props) => {
  return (
    <div className="mb-4 flex flex-col">
      <label htmlFor={id} className="mb-1 flex items-center gap-1">
        {children}
      </label>
      <input
        {...formRegister}
        id={id}
        type={type}
        onChange={(e) => onChange && onChange(e.target.value)}
        className="rounded border-2 border-black px-2 py-1 text-sm focus:rounded focus:border-orange-900 focus:outline-none"
      />
      {errorMessage && <p className="text-xs text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default FormInput;
