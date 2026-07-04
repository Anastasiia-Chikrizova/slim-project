import { useActionState } from "react";
import { useRegisterMutation } from "../../redux/api/apiSlice";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Link } from "react-router-dom";
import TextField from "../../shared/components/TextField";
import Button from "../../shared/components/Button";
import inputAttr from "../../shared/components/TextField/InputAttr";
import styles from "./RegisterForm.module.scss";

interface RegisterState {
  error: string | null;
}

const RegisterForm = () => {
  const [register] = useRegisterMutation();

  const registerAction = async (
    _prevState: RegisterState,
    formData: FormData
  ): Promise<RegisterState> => {
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      await register({ username, email, password }).unwrap();
      return { error: null };
    } catch (error) {
      const err = error as { status?: number; data?: { message?: string } };
      const message =
        err.status === 409
          ? "Provided email already exists, try another"
          : err.data?.message || "Something went wrong";
      Notify.failure(message);
      return { error: message };
    }
  };

  const [, action, isPending] = useActionState(registerAction, { error: null });

  return (
    <div className="container">
      <h1 className={styles.title}>Регистрация</h1>
      <form action={action} className={styles.form} autoComplete="off">
        <div className={styles.fieldsBox}>
          <div className={styles.textField}>
            <TextField {...inputAttr.name} />
          </div>
          <div className={styles.textField}>
            <TextField {...inputAttr.email} name="email" required placeholder="Логин" />
          </div>
          <div className={styles.textField}>
            <TextField {...inputAttr.password} name="password" required placeholder="Пароль" />
          </div>
        </div>
        <div className={styles.btnBox}>
          <Link to="/login">
            <Button
              className={`${styles.button} ${styles.buttonSecondary} ${styles.logBtn}`}
              text="Вход"
              variant="secondary"
            />
          </Link>
          <Button
            className={`${styles.button} ${styles.buttonPrimary}`}
            text={isPending ? "Загрузка..." : "Регистрация"}
            type="submit"
            variant="primary"
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
