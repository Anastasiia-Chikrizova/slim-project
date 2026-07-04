import { NavLink } from "react-router-dom";

import styles from "./UserMenu.module.scss";

interface UserMenuItemProps {
  to: string;
  exact?: boolean;
  text: string;
}

const UserMenuItem = ({ to, text }: UserMenuItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => isActive ? `${styles.navlink} ${styles.navlinkActive}` : styles.navlink}
    >
      {text}
    </NavLink>
  );
};

export default UserMenuItem;
