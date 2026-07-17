import styles from "./Button.module.scss";

type ButtonVariant = "primary" | "secondary";
type ButtonType = "button" | "reset" | "submit";

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  type?: ButtonType;
}

const types: Record<ButtonVariant, string> = {
  primary: styles.buttonPrimary,
  secondary: styles.buttonSecondary,
};

const Button = ({
  className = "",
  text,
  onClick = () => {},
  variant = "primary",
  type = "button",
}: ButtonProps) => {
  const selectedClassName = types[variant];
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${selectedClassName} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
