import { useActionState } from "react";
import styles from "./CalculatorPage.module.scss";
import Button from "../../shared/components/Button";
import TextField from "../../shared/components/TextField";
import RadioGroup from "../../shared/components/RadioGroup";
import AuthorizedPageContainer from "../../shared/containerPage/AuthorizedPage/AuthorizedPage";
import { getUserId } from "../../redux/calendar/summaries/summaries-selectors";
import { useSelector } from "react-redux";
import { useDailyRateByIdMutation } from "../../redux/api/apiSlice";

interface CalcState {
  success: boolean;
  error: string | null;
}

const bloodTypeItems = [
  { name: "bloodType", value: 1, label: "1", required: true },
  { name: "bloodType", value: 2, label: "2" },
  { name: "bloodType", value: 3, label: "3" },
  { name: "bloodType", value: 4, label: "4" },
];

const CalculatorPage = () => {
  const [dailyRateById] = useDailyRateByIdMutation();
  const idUser = useSelector(getUserId);

  const calcAction = async (_prevState: CalcState, formData: FormData): Promise<CalcState> => {
    const ccc = {
      height: Number(formData.get("height")),
      age: Number(formData.get("age")),
      weight: Number(formData.get("weight")),
      desiredWeight: Number(formData.get("desiredWeight")),
      bloodType: Number(formData.get("bloodType")),
    };
    try {
      await dailyRateById({ ccc, idUser }).unwrap();
      return { success: true, error: null };
    } catch (error) {
      console.error(error);
      return { success: false, error: "Ошибка при расчёте" };
    }
  };

  const [, action, isPending] = useActionState(calcAction, { success: false, error: null });

  return (
    <AuthorizedPageContainer>
      <div className={styles.mainDiv}>
        <h1 className={styles.title}>Узнай свою суточную норму калорий</h1>
        <form action={action} className={styles.form}>
          <div className={styles.fields}>
            <div className={styles.field}>
              <TextField required name="height" placeholder="Рост" />
            </div>
            <div className={styles.field}>
              <TextField required name="age" placeholder="Возраст" />
            </div>
            <div className={styles.field}>
              <TextField required name="weight" placeholder="Текущий вес" />
            </div>
            <div className={styles.field}>
              <TextField required name="desiredWeight" placeholder="Желаемый вес" />
            </div>
            <RadioGroup label="Группа крови *" items={bloodTypeItems} />
          </div>
          <Button
            text={isPending ? "Загрузка..." : "Похудеть"}
            className={styles.button}
            type="submit"
          />
        </form>
      </div>
    </AuthorizedPageContainer>
  );
};

export default CalculatorPage;
