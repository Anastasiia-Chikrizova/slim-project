import { useSelector } from "react-redux";
import {
  getData,
  getSummariesInfo,
} from "../../../redux/calendar/summaries/summaries-selectors";
import styles from "./SideBarSummary.module.scss";

const SideBarSummary = () => {
  const summariesData = useSelector(getSummariesInfo);
  const getDate = useSelector(getData);
  const currentDate = getDate?.split("-")?.reverse()?.join("-");

  const summ = {
    kcalLeft: 0,
    kcalConsumed: 0,
    dailyRate: 0,
    percentsOfDailyRate: 0,
  };
  const summaries = summariesData ?? summ;

  return (
    <>
      <div className={styles.summaryDiv}>
        <h2 className={styles.summaryTitle}>Сводка за {currentDate}</h2>
        <ul className={styles.summaryList}>
          <li className={styles.summaryItem}>
            Осталось{" "}
            <span className={styles.summary_kcal}>
              {Math.round(summaries.kcalLeft)} ккал
            </span>
          </li>
          <li className={styles.summaryItem}>
            Употреблено{" "}
            <span className={styles.summary_kcal}>
              {Math.round(summaries.kcalConsumed)} ккал
            </span>
          </li>
          <li className={styles.summaryItem}>
            Дневная норма{" "}
            <span className={styles.summary_kcal}>
              {Math.round(summaries.dailyRate)} ккал
            </span>
          </li>
          <li className={styles.summaryItem}>
            n% от нормы{" "}
            <span className={styles.summary_kcal}>
              {Math.round(summaries.percentsOfDailyRate)} ккал
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};
export default SideBarSummary;
