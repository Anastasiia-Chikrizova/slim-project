import styles from "./ModalInfo.module.scss";
import { Link } from "react-router-dom";

interface ModalInfoProps {
  products: string[];
  calories: number | null;
}

const ModalInfo = ({ products, calories }: ModalInfoProps) => {
  return (
      <div>
        <h2 className={styles.title}>Ваша рекомендуемая суточная норма калорий составляет</h2>
        <div className={styles.container}>
        <p className={styles.caloriesText}> 
        <span className={styles.caloriesValue}>{calories}</span> ккал
        </p>
        <h2 className={styles.productsTitle}> Продукты, которые вам не рекомендуется употреблять</h2>
        <ol className={styles.productsList}>
          {products.map((product) => (
             <li key={product} className={styles.productsItem}>{product}</li>
          ))}
        </ol>
        <Link to="/registration" className={styles.button}>
               Начать худеть
            </Link>
        </div>
      </div>
  );
};
export default ModalInfo;
