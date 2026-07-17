import SideBarRation from "./SideBarRation/SideBarRation";
import SideBarSummary from "./sideBarSummary/SideBarSummary";

import styles from "./SideBar.module.scss";

function SideBar() {
  return (
    <div className={styles.sideBarDiv}>
      <SideBarSummary />
      <SideBarRation />
    </div>
  );
}

export default SideBar;
