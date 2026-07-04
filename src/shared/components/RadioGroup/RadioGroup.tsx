import RadioField from "../RadioField";
import type { RadioFieldProps } from "../RadioField/RadioField";
import styles from "./RadioGroup.module.scss";

interface RadioGroupProps {
  label?: string;
  items?: RadioFieldProps[];
}

const RadioGroup = ({ label, items = [] }: RadioGroupProps) => {
  const elements = items.map((item) => (
    <RadioField key={item.value} {...item} />
  ));

  return (
    <div className={styles.radioGroup}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.radioButtons}>{elements}</div>
    </div>
  );
};

export default RadioGroup;
