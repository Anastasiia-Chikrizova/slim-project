import styles from "./ModalInfo.module.scss";
import { Link } from "react-router-dom";

interface ModalInfoProps {
  products: string[];
  calories: number | null;
}

const ModalInfo = ({ products, calories }: ModalInfoProps) => {
  return (
      <div>
        <h2 className={styles.title}>Your recommended daily calorie rate is</h2>
        <div className={styles.container}>
        <p className={styles.caloriesText}>
        <span className={styles.caloriesValue}>{calories}</span> kcal
        </p>
        <h2 className={styles.productsTitle}> Products you&apos;re not recommended to eat</h2>
        <ol className={styles.productsList}>
          {products.map((product) => (
             <li key={product} className={styles.productsItem}>{product}</li>
          ))}
        </ol>
        <Link to="/registration" className={styles.button}>
               Start losing weight
            </Link>
        </div>
      </div>
  );
};
export default ModalInfo;
