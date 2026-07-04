import { useRegisterMutation } from "../../redux/api/apiSlice";
import { RegisterRequest } from "../../redux/api/contracts";
import { Link } from "react-router-dom";
import TextField from "../../shared/components/TextField";
import Button from "../../shared/components/Button";
import inputAttr from "../../shared/components/TextField/InputAttr";
import { useAuthFormAction } from "../../shared/hooks";
import styles from "./RegisterForm.module.scss";

const RegisterForm = () => {
  const [register] = useRegisterMutation();

  const [, action, isPending] = useAuthFormAction<RegisterRequest>(
    (payload) => register(payload).unwrap(),
    (formData) => ({
      username: formData.get("username") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    }),
    { 409: "Provided email already exists, try another" }
  );

  return (
    <div className="container">
      <h1 className={styles.title}>Sign up</h1>
      <form action={action} className={styles.form} autoComplete="off">
        <div className={styles.fieldsBox}>
          <div className={styles.textField}>
            <TextField {...inputAttr.name} />
          </div>
          <div className={styles.textField}>
            <TextField {...inputAttr.email} name="email" required placeholder="Email" />
          </div>
          <div className={styles.textField}>
            <TextField {...inputAttr.password} name="password" required placeholder="Password" />
          </div>
        </div>
        <div className={styles.btnBox}>
          <Link to="/login">
            <Button
              className={`${styles.button} ${styles.buttonSecondary} ${styles.logBtn}`}
              text="Log in"
              variant="secondary"
            />
          </Link>
          <Button
            className={`${styles.button} ${styles.buttonPrimary}`}
            text={isPending ? "Loading..." : "Sign up"}
            type="submit"
            variant="primary"
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
