import MenuItem from "./MenuItem";
import { items } from "./items";
import useMedia from "../../../shared/hooks/useMedia";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import styles from "./UserMenu.module.scss";

const loginMenu = items.login.map(({ id, ...props }) => (
  <MenuItem
    key={id}
    {...props}
    className={styles.navlink}
    activeClassName={styles.navlinkActive}
  />
));

const logoutMenu = items.logout.map(({ id, ...props }) => (
  <MenuItem
    key={id}
    {...props}
    className={styles.navlink}
    activeClassName={styles.navlinkActive}
  />
));

interface UserMenuProps {
  isLoggedIn: boolean;
}

const UserMenu = ({ isLoggedIn }: UserMenuProps) => {
  const { DESK } = useMedia();
  return (
    <>
      <div className={styles.userMenu}>
        {isLoggedIn && !DESK && <BurgerMenu />}
        {isLoggedIn && DESK && loginMenu}
        {!isLoggedIn && logoutMenu}
      </div>
    </>
  );
};

export default UserMenu;
