import {
  UseFormRegister,
  FieldError,
  Merge,
  FieldErrorsImpl,
} from "react-hook-form";
import { IForm } from "./form";
import { EnumType } from "typescript";

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<IForm>;
  name: keyof IForm;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  validation?: any;
  className?: string;
}

const InputField = ({
  label,
  type = "text",
  placeholder,
  register,
  name,
  error,
  validation,
  className = "",
}: InputFieldProps) => {
  return (
    <div className={`mt-4 ${className}`}>
      <label className="block mb-1 font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
        className={`${
          error && "border-red-500"
        } w-full p-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring-0`}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{String(error.message)}</p>
      )}
    </div>
  );
};

export default InputField;
