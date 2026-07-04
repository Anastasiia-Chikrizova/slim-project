import { useActionState, useEffect, useRef, useState } from "react";
import Select, { SingleValue } from "react-select";
import styles from "./DiaryAddProductForm.module.scss";
import TextField from "../../../shared/components/TextField";
import {
  useAddDayProductMutation,
  useLazyProductsQuery,
} from "../../../redux/api/apiSlice";
import { getData } from "../../../redux/calendar/summaries/summaries-selectors";
import { useSelector } from "react-redux";

interface SelectOption {
  value: string;
  label: string;
}

interface FormState {
  error: string | null;
}

const DiaryAddProductForm = () => {
  const [addDayProduct] = useAddDayProductMutation();
  const [triggerProducts] = useLazyProductsQuery();
  const date = useSelector(getData);

  const [options, setOptions] = useState<SelectOption[]>([]);
  const [selectProduct, setSelectProduct] = useState("");
  const productIdRef = useRef("");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await triggerProducts(selectProduct).unwrap();
      const newOptions = (data as { _id: string; title: { ru: string } }[]).map(
        ({ _id, title }) => ({ value: _id, label: title.ru })
      );
      setOptions(newOptions);
    };
    if (selectProduct.length > 2) {
      fetchProduct();
    }
  }, [selectProduct, triggerProducts]);

  const submitAction = async (_prevState: FormState, formData: FormData): Promise<FormState> => {
    const weight = formData.get("weight") as string;
    const productId = productIdRef.current;
    if (!productId || !weight) return { error: "Заполните все поля" };
    try {
      await addDayProduct({ date, productId, weight }).unwrap();
      formRef.current?.reset();
      productIdRef.current = "";
      setSelectProduct("");
      setOptions([]);
      return { error: null };
    } catch (error) {
      console.error(error);
      return { error: "Ошибка при добавлении продукта" };
    }
  };

  const [, action, isPending] = useActionState(submitAction, { error: null });

  const handleProductChange = (option: SingleValue<SelectOption>) => {
    if (option) productIdRef.current = option.value;
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
        onInputChange={setSelectProduct}
      />
      <TextField
        type="text"
        name="weight"
        placeholder="Граммы"
        className={styles.ProductInput}
      />
      <button type="submit" className={styles.ProductAddBtn} disabled={isPending} />
    </form>
  );
};

export default DiaryAddProductForm;
