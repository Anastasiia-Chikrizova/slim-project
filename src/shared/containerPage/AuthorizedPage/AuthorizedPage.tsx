import { ReactNode } from "react";
import Sidebar from "../../../client/SideBar";
import styles from "./AuthorizedPage.module.scss";

interface AuthorizedPageContainerProps {
  children: ReactNode;
}

const AuthorizedPageContainer = ({ children }: AuthorizedPageContainerProps) => {
  return (
    <main className={styles.main}>{children}
        <Sidebar/>
    </main>
  );
};
export default AuthorizedPageContainer;
