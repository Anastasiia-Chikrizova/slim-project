import DiaryProductsListItem from "./DiaryProductsListItem";
import styles from "./DiaryProductsList.module.scss";
import { useSelector } from "react-redux";
import { getDayId, getProduct } from "../../../redux/calendar/summaries/summaries-selectors";
import { useDeleteDayProductMutation } from "../../../redux/api/apiSlice";

const DiaryProductsList = () => {
  const days = useSelector(getProduct);
  const dayId = useSelector(getDayId);
  const [deleteDayProduct] = useDeleteDayProductMutation();

  const handleDelete = (eatenProductId: string) => {
    deleteDayProduct({ dayId, eatenProductId });
  };

  const productsListMarkup = days?.map((product) => (
    <DiaryProductsListItem key={product.id} product={product} onDelete={handleDelete} />
  ));

  return (
    <ul className={styles.productsList}>
      {productsListMarkup ? productsListMarkup : <p>Nothing found</p>}
    </ul>
  );
};

export default DiaryProductsList;
