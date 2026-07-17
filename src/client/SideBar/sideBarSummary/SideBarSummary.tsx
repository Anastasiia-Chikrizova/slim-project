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
        <h2 className={styles.summaryTitle}>Summary for {currentDate}</h2>
        <ul className={styles.summaryList}>
          <li className={styles.summaryItem}>
            Left{" "}
            <span className={styles.summary_kcal}>
              {Math.round(summaries.kcalLeft)} kcal
            </span>
          </li>
          <li className={styles.summaryItem}>
            Consumed{" "}
            <span className={styles.summary_kcal}>
              {Math.round(summaries.kcalConsumed)} kcal
            </span>
          </li>
          <li className={styles.summaryItem}>
            Daily rate{" "}
            <span className={styles.summary_kcal}>
              {Math.round(summaries.dailyRate)} kcal
            </span>
          </li>
          <li className={styles.summaryItem}>
            % of daily rate{" "}
            <span className={styles.summary_kcal}>
              {Math.round(summaries.percentsOfDailyRate)} kcal
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};
export default SideBarSummary;
