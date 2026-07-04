import { useSelector } from "react-redux";
import { useDeleteDayProductMutation } from "../../../../redux/api/apiSlice";
import { getDayId } from "../../../../redux/calendar/summaries/summaries-selectors";
import { EatenProduct } from "../../../../redux/types";
import styles from "./DiaryProductsListItem.module.scss";

interface DiaryProductsListItemProps {
  product: EatenProduct;
}

const DiaryProductsListItem = ({ product }: DiaryProductsListItemProps) => {
  const { id, title, weight, kcal } = product;
  const dayId = useSelector(getDayId);
  const [deleteDayProduct] = useDeleteDayProductMutation();
  const eatenProductId = id;

  const onDelete = () => {
    deleteDayProduct({ dayId, eatenProductId });
  };

  return (
    <li className={styles.productsItem}>
      <span className={styles.productsName}>{title}</span>
      <span className={styles.productsWeight}>{weight} г</span>
      <span className={styles.productsKcal}>
        {Math.round(kcal)}
        <span className={styles.productsUnits}> ккал</span>
      </span>

      <button
        type="button"
        className={styles.productsButton}
        onClick={onDelete}
      >
        +
      </button>
    </li>
  );
};

export default DiaryProductsListItem;
