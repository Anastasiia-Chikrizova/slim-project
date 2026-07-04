import { useLogInMutation } from "../../redux/api/apiSlice";
import { LoginRequest } from "../../redux/api/contracts";
import { Link } from "react-router-dom";
import TextField from "../../shared/components/TextField";
import Button from "../../shared/components/Button";
import inputAttr from "../../shared/components/TextField/InputAttr";
import { useAuthFormAction } from "../../shared/hooks";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const [logIn] = useLogInMutation();

  const [, action, isPending] = useAuthFormAction<LoginRequest>(
    (payload) => logIn(payload).unwrap(),
    (formData) => ({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    }),
    { 403: "This email doesn't exist or password is wrong" }
  );

  return (
    <div className={`${styles.main} container`}>
      <h1 className={styles.title}>LOG IN</h1>
      <form action={action} className={styles.form} autoComplete="off">
        <div className={styles.fieldsBox}>
          <div className={styles.textField}>
            <TextField {...inputAttr.email} name="email" required placeholder="Email" />
          </div>
          <div className={styles.textField}>
            <TextField {...inputAttr.password} name="password" required placeholder="Password" />
          </div>
        </div>
        <div className={styles.btnBox}>
          <Button
            className={`${styles.button} ${styles.buttonPrimary} ${styles.logBtn}`}
            text={isPending ? "Loading..." : "Log in"}
            type="submit"
            variant="primary"
          />
          <Link to="/registration">
            <Button
              className={`${styles.button} ${styles.buttonSecondary}`}
              text="Sign up"
              variant="secondary"
            />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
