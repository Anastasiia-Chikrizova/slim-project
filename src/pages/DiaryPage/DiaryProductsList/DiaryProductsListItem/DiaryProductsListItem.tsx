import { EatenProduct } from "../../../../redux/types";
import styles from "./DiaryProductsListItem.module.scss";

interface DiaryProductsListItemProps {
  product: EatenProduct;
  onDelete: (eatenProductId: string) => void;
}

const DiaryProductsListItem = ({ product, onDelete }: DiaryProductsListItemProps) => {
  const { id, title, weight, kcal } = product;

  return (
    <li className={styles.productsItem}>
      <span className={styles.productsName}>{title}</span>
      <span className={styles.productsWeight}>{weight} g</span>
      <span className={styles.productsKcal}>
        {Math.round(kcal)}
        <span className={styles.productsUnits}> kcal</span>
      </span>

      <button
        type="button"
        className={styles.productsButton}
        onClick={() => onDelete(id)}
      >
        +
      </button>
    </li>
  );
};

export default DiaryProductsListItem;
