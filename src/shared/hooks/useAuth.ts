import { useSelector } from "react-redux";
import { fetchToken } from "../../redux/auth/auth-selectors";

export const useAuth = (): boolean => {
  const token = useSelector(fetchToken);
  return Boolean(token);
};

export default useAuth;
