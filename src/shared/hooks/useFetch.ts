import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = <T = unknown>(url: string): T[] => {
  const [data, setData] = useState<T[]>([]);
  useEffect(() => {
    const fetchData = async function () {
      const { data } = await axios.get(url);
      setData(data);
    };
    fetchData();
  }, [url]);
  return data;
};
