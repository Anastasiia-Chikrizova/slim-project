import { useActionState, useRef } from "react";
import { useSelector } from "react-redux";
import { useAddDayProductMutation } from "../../../redux/api/apiSlice";
import { getData } from "../../../redux/calendar/summaries/summaries-selectors";

interface FormState {
  error: string | null;
}

export const useDiaryAddProductForm = (onSuccess?: () => void) => {
  const [addDayProduct] = useAddDayProductMutation();
  const date = useSelector(getData);
  const productIdRef = useRef("");
  const formRef = useRef<HTMLFormElement>(null);

  const submitAction = async (_prevState: FormState, formData: FormData): Promise<FormState> => {
    const weight = formData.get("weight") as string;
    const productId = productIdRef.current;
    if (!productId || !weight) return { error: "Please fill in all fields" };
    try {
      await addDayProduct({ date, productId, weight }).unwrap();
      formRef.current?.reset();
      productIdRef.current = "";
      onSuccess?.();
      return { error: null };
    } catch (error) {
      console.error(error);
      return { error: "Failed to add product" };
    }
  };

  const [state, action, isPending] = useActionState(submitAction, { error: null });

  const setProductId = (id: string) => {
    productIdRef.current = id;
  };

  return { state, action, isPending, formRef, setProductId };
};
