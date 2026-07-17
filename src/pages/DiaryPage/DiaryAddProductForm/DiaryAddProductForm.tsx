import Select, { SingleValue } from "react-select";
import styles from "./DiaryAddProductForm.module.scss";
import TextField from "../../../shared/components/TextField";
import { useProductSearch } from "./useProductSearch";
import { useDiaryAddProductForm } from "./useDiaryAddProductForm";

interface SelectOption {
  value: string;
  label: string;
}

interface DiaryAddProductFormProps {
  onSuccess?: () => void;
}

const DiaryAddProductForm = ({ onSuccess }: DiaryAddProductFormProps) => {
  const { options, setQuery, resetOptions } = useProductSearch();
  const { action, isPending, formRef, setProductId } = useDiaryAddProductForm(() => {
    resetOptions();
    setQuery("");
    onSuccess?.();
  });

  const handleProductChange = (option: SingleValue<SelectOption>) => {
    if (option) setProductId(option.value);
  };

  return (
    <form ref={formRef} action={action} className={styles.ProductForm}>
      <Select
        className="basic-single"
        classNamePrefix="select"
        isSearchable
        name="product"
        options={options}
        onChange={handleProductChange}
        onInputChange={setQuery}
      />
      <TextField type="text" name="weight" placeholder="Grams" className={styles.ProductInput} />
      <button type="submit" className={styles.ProductAddBtn} disabled={isPending} />
    </form>
  );
};

export default DiaryAddProductForm;
