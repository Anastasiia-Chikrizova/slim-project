import { NavLink } from "react-router-dom";

import styles from "./BurgerMenu.module.scss";

interface BurgerMenuItemProps {
  to: string;
  text: string;
  closeModal?: () => void;
}

const BurgerMenuItem = ({ to, text, closeModal }: BurgerMenuItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => isActive ? `${styles.navlink} ${styles.navlinkActive}` : styles.navlink}
      onClick={closeModal}
    >
      {text}
    </NavLink>
  );
};

export default BurgerMenuItem;
