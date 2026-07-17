import { ChangeEvent } from "react";
import useUniqueString from "../../hooks/useUniqueString";
import styles from "./RadioField.module.scss";

export interface RadioFieldProps {
  name: string;
  value: string | number;
  label?: string;
  required?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RadioField = ({ label, name, value, required = false, onChange }: RadioFieldProps) => {
  const id = useUniqueString();
  return (
    <div className={styles.radioBox}>
      <input
        name={name}
        id={id}
        type="radio"
        value={value}
        onChange={onChange}
        required={required}
        className={`${styles.radioButton} ${styles.visuallyHidden}`}
      />
      <label htmlFor={id} className={styles.radioLabel}>
        <span className={styles.customRadio}></span>
        {label && label}
      </label>
    </div>
  );
};

export default RadioField;
