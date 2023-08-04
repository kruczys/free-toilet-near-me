import { InputHTMLAttributes, ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  formRegister: UseFormRegisterReturn;
  id: string;
  children: ReactNode;
  errorMessage?: string;
  handleChange?: (value: string) => void;
}

const FormInput = ({
  formRegister,
  id,
  type,
  children,
  errorMessage,
  handleChange,
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
        onChange={(e) => handleChange && handleChange(e.target.value)}
        className="rounded border-2 border-black px-2 py-1 text-sm focus:rounded focus:border-orange-900 focus:outline-none"
      />
      {errorMessage && <p className="text-xs text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default FormInput;
