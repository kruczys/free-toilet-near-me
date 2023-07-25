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
    <div className="flex flex-col mb-4">
      <label htmlFor={id} className="flex items-center gap-1 mb-1">
        {children}
      </label>
      <input
        {...formRegister}
        id={id}
        type={type}
        onChange={(e) => onChange && onChange(e.target.value)}
        className="text-sm border-2 border-black rounded px-2 py-1 focus:rounded focus:outline-none focus:border-orange-900"
      />
      {errorMessage && <p className="text-xs text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default FormInput;
