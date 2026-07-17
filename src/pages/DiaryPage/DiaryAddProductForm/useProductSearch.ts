import { useEffect, useState } from "react";
import { useLazyProductsQuery } from "../../../redux/api/apiSlice";

interface ProductOption {
  value: string;
  label: string;
}

const MIN_QUERY_LENGTH = 3;
const DEBOUNCE_MS = 300;

export const useProductSearch = () => {
  const [query, setQueryState] = useState("");
  const [options, setOptions] = useState<ProductOption[]>([]);
  const [triggerProducts] = useLazyProductsQuery();

  const setQuery = (value: string) => {
    setQueryState(value);
    if (value.length < MIN_QUERY_LENGTH) {
      setOptions([]);
    }
  };

  useEffect(() => {
    if (query.length < MIN_QUERY_LENGTH) {
      return;
    }

    const timeoutId = setTimeout(async () => {
      const products = await triggerProducts(query).unwrap();
      setOptions(products.map(({ _id, title }) => ({ value: _id, label: title.ru })));
    }, DEBOUNCE_MS);

    return () => clearTimeout(timeoutId);
  }, [query, triggerProducts]);

  const resetOptions = () => setOptions([]);

  return { options, setQuery, resetOptions };
};
