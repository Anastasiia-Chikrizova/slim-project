import { useActionState } from "react";
import styles from "./MainPage.module.scss";
import Button from "../../shared/components/Button";
import TextField from "../../shared/components/TextField";
import RadioGroup from "../../shared/components/RadioGroup";
import Modal from "../../shared/components/Modal";
import ModalInfo from "../../shared/components/ModalInfo";
import { useDailyRateMutation } from "../../redux/api/apiSlice";
import { DailyRateRequest } from "../../redux/api/contracts";

interface CalcState {
  calories: number | null;
  products: string[];
  showModal: boolean;
}

const bloodTypeItems = [
  { name: "bloodType", value: 1, label: "1", required: true },
  { name: "bloodType", value: 2, label: "2" },
  { name: "bloodType", value: 3, label: "3" },
  { name: "bloodType", value: 4, label: "4" },
];

const MainPage = () => {
  const [dailyRate] = useDailyRateMutation();

  const calcAction = async (_prevState: CalcState, formData: FormData): Promise<CalcState> => {
    const payload: DailyRateRequest = {
      height: Number(formData.get("height")),
      age: Number(formData.get("age")),
      weight: Number(formData.get("weight")),
      desiredWeight: Number(formData.get("desiredWeight")),
      bloodType: Number(formData.get("bloodType")) as DailyRateRequest["bloodType"],
    };
    try {
      const { dailyRate: rate, notAllowedProducts } = await dailyRate(payload).unwrap();
      return { calories: rate, products: notAllowedProducts.slice(0, 4), showModal: true };
    } catch (error) {
      console.error(error);
      return { calories: null, products: [], showModal: false };
    }
  };

  const [state, action, isPending] = useActionState(calcAction, {
    calories: null,
    products: [],
    showModal: false,
  });

  const closeModal = () => {
    action(new FormData());
  };

  return (
    <div className={styles.main}>
      <div className="container">
        <span className={styles.envBadge}>{import.meta.env.VITE_APP_ENV}</span>
        <h1 className={styles.title}>Calculate your daily calorie rate right now</h1>
        {state.showModal && (
          <Modal onClose={closeModal}>
            <ModalInfo products={state.products} calories={state.calories} />
          </Modal>
        )}
        <form action={action} className={styles.form}>
          <div className={styles.fields}>
            <div className={styles.field}>
              <TextField required name="height" placeholder="Height" min="100" max="250" type="number" />
            </div>
            <div className={styles.field}>
              <TextField required name="age" placeholder="Age" min="18" max="100" type="number" />
            </div>
            <div className={styles.field}>
              <TextField required name="weight" placeholder="Current weight" min="0" max="500" type="number" />
            </div>
            <div className={styles.field}>
              <TextField
                required
                name="desiredWeight"
                placeholder="Desired weight"
                min="0"
                max="500"
                type="number"
              />
            </div>
            <RadioGroup label="Blood type *" items={bloodTypeItems} />
          </div>
          <Button
            text={isPending ? "Loading..." : "Lose weight"}
            className={styles.button}
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default MainPage;
