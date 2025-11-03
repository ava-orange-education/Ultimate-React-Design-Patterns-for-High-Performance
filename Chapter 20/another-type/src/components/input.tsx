import { ChangeEventHandler } from "react";

type TightProps<T extends Record<string, any>> = T | OptionalUndefined<T>;
type OptionalUndefined<T extends Record<string, any>> = Partial<Record<keyof T, undefined>>;

type InputProps = TightProps<{ value: string; onChange: ChangeEventHandler; }> & { label: string; };

type test = TightProps<"string">

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div>
      <label>
        {label}
        <input {...props} />
      </label>
    </div>
  );
};

export default Input;
