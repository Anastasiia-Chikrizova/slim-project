import { useSelector } from "react-redux";
import { getnotAllowedProducts } from "../../../redux/calendar/summaries/summaries-selectors";
import styles from "./SideBarRation.module.scss";

const SideBarRation = () => {
  const notAllowedProducts = useSelector(getnotAllowedProducts)
    .slice(0, 5)
    .join(", ");

  return (
    <div className={styles.rationWrapper}>
      <h2 className={styles.rationTitle}>Not recommended products</h2>
      <p className={styles.ration}>
        {notAllowedProducts ? (
          notAllowedProducts
        ) : (
          <h2>Your ration will be displayed here</h2>
        )}
      </p>
    </div>
  );
};
export default SideBarRation;
