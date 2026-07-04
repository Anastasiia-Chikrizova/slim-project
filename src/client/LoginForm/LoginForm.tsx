import { useActionState } from "react";
import { useLogInMutation } from "../../redux/api/apiSlice";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Link } from "react-router-dom";
import TextField from "../../shared/components/TextField";
import Button from "../../shared/components/Button";
import inputAttr from "../../shared/components/TextField/InputAttr";
import styles from "./LoginForm.module.scss";

interface LoginState {
  error: string | null;
}

const LoginForm = () => {
  const [logIn] = useLogInMutation();

  const loginAction = async (_prevState: LoginState, formData: FormData): Promise<LoginState> => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      await logIn({ email, password }).unwrap();
      return { error: null };
    } catch (error) {
      const err = error as { status?: number; data?: { message?: string } };
      const message =
        err.status === 403
          ? "This email doesn't exist or password is wrong"
          : err.data?.message || "Something went wrong";
      Notify.failure(message);
      return { error: message };
    }
  };

  const [, action, isPending] = useActionState(loginAction, { error: null });

  return (
    <div className={`${styles.main} container`}>
      <h1 className={styles.title}>ВХОД</h1>
      <form action={action} className={styles.form} autoComplete="off">
        <div className={styles.fieldsBox}>
          <div className={styles.textField}>
            <TextField {...inputAttr.email} name="email" required placeholder="Логин" />
          </div>
          <div className={styles.textField}>
            <TextField {...inputAttr.password} name="password" required placeholder="Пароль" />
          </div>
        </div>
        <div className={styles.btnBox}>
          <Button
            className={`${styles.button} ${styles.buttonPrimary} ${styles.logBtn}`}
            text={isPending ? "Загрузка..." : "Вход"}
            type="submit"
            variant="primary"
          />
          <Link to="/registration">
            <Button
              className={`${styles.button} ${styles.buttonSecondary}`}
              text="Регистрация"
              variant="secondary"
            />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
