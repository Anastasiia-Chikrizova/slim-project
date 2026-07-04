import { useState } from "react";
import { ReactComponent as MenuBtn } from "../../../../shared/images/svg/burgerMenu.svg";
import { ReactComponent as CloseBtn } from "../../../../shared/images/svg/close.svg";
import Modal from "../../Modal/Modal";
import styles from "./BurgerMenu.module.scss";
import { items } from "../items";
import BurgerMenuItem from "../BurgerMenu/BurgerMenuItem";

const BurgerMenu = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const loginMenu = items.login.map(({ id, ...props }) => (
    <BurgerMenuItem closeModal={closeModal} key={id} {...props} />
  ));

  const menu = <div className={styles.modalItems}>{loginMenu}</div>;

  return (
    <div>
      <button type="button" onClick={toggleModal} className={styles.burgerBtn}>
        {showModal ? <CloseBtn /> : <MenuBtn />}
      </button>
      {showModal && <Modal>{menu}</Modal>}
    </div>
  );
};

export default BurgerMenu;
