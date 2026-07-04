import { nanoid } from "nanoid";
import { ChangeEvent } from "react";
import styles from "./TextField.module.scss";

interface TextFieldProps {
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  [key: string]: unknown;
}

const TextField = ({ label, required = false, type = "text", placeholder, ...field }: TextFieldProps) => {
  const id = nanoid();
  const displayPlaceholder = required && placeholder ? `${placeholder} *` : placeholder;

  return (
    <div className={styles.formGroup}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        className={styles.formInput}
        {...field}
        id={id}
        type={type}
        placeholder={displayPlaceholder}
        required={required}
      />
    </div>
  );
};

export default TextField;
