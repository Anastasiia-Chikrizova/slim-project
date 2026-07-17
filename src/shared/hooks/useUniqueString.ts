import { nanoid } from "nanoid";
import { useState } from "react";

const useUniqueString = (): string => {
  const [id] = useState(() => nanoid());
  return id;
};

export default useUniqueString;
