import { useMediaQuery } from "react-responsive";
const useMedia = () => {
  const MOB = useMediaQuery({ query: "(max-width: 767px)" });
  const TABL = useMediaQuery({ query: "(min-width: 768px)" });
  const DESK = useMediaQuery({ query: "(min-width: 1280px)" });
  return { MOB, TABL, DESK };
};

export default useMedia;
