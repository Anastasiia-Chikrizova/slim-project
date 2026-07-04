import { Link } from "react-router-dom";
import { useAuth } from "../../shared/hooks/useAuth";

import Logo from "../../shared/components/Logo/Logo";
import UserMenu from "./UserMenu/UserMenu";
import UserInfo from "./UserInfo/UserInfo";

import logoMobile from "../../shared/images/logo/logo-mobile.png";
import logoMobile2x from "../../shared/images/logo/logo-mobile-2x.png";
import logoTablet from "../../shared/images/logo/logo-tablet.png";
import logoTablet2x from "../../shared/images/logo/logo-tablet-2x.png";
import logoDesktop from "../../shared/images/logo/logo-desktop.png";
import logoDesktop2x from "../../shared/images/logo/logo-desktop-2x.png";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const isLoggedIn = useAuth();

  return (
    <nav className={styles.nav}>
      <div className={!isLoggedIn? `${styles.row}`:`${styles.rowLog}`}>
        <div className={styles.logo}>
          <Link to="/" className={styles.link}>
            <Logo
              logoMobile={logoMobile}
              logoMobile2x={logoMobile2x}
              logoTablet={logoTablet}
              logoTablet2x={logoTablet2x}
              logoDesktop={logoDesktop}
              logoDesktop2x={logoDesktop2x}
            />
          </Link>
        </div>
        <div className={styles.menuRow}>
          <UserMenu isLoggedIn={isLoggedIn} />
        </div>
        {isLoggedIn &&<div className={styles.infoRow}> <UserInfo /></div>}
      </div>
    </nav>
  );
};

export default Navbar;
