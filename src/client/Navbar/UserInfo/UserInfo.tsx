import { useSelector } from "react-redux";

import { useLogOutMutation } from "../../../redux/api/apiSlice";

import { fetchName } from "../../../redux/auth/auth-selectors";

import styles from "./UserInfo.module.scss";

const UserInfo = () => {
  const [logOut] = useLogOutMutation();
  const name = useSelector(fetchName);
  return (
    <div className={styles.userInfo}>
      <span className={styles.name}>{name}</span>
      <button
        type="button"
        className={styles.btn}
        onClick={() => logOut(undefined)}
      >
        Log out
      </button>
    </div>
  );
};

export default UserInfo;
