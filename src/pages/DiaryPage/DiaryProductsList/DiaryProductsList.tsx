import DiaryProductsListItem from "./DiaryProductsListItem";
import styles from "./DiaryProductsList.module.scss";
import { useSelector } from "react-redux";
import { getProduct } from "../../../redux/calendar/summaries/summaries-selectors";

const DiaryProductsList = () => {
  const days = useSelector(getProduct);
  
  const productsListMarkup = days?.map((product) => {
    return <DiaryProductsListItem key={product.id} product={product} />;
  });

  return (
    <ul className={styles.productsList}>
      {productsListMarkup ? productsListMarkup : <p>Nothing found</p>}
    </ul>
  );
};

export default DiaryProductsList;
