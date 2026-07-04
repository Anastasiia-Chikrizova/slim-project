import { InputHTMLAttributes } from "react";
import useUniqueString from "../../hooks/useUniqueString";
import styles from "./TextField.module.scss";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const TextField = ({ label, required = false, type = "text", placeholder, ...field }: TextFieldProps) => {
  const id = useUniqueString();
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
