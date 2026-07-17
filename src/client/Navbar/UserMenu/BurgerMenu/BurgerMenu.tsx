import { useState } from "react";
import MenuBtn from "../../../../shared/images/svg/burgerMenu.svg?react";
import CloseBtn from "../../../../shared/images/svg/close.svg?react";
import Modal from "../../../../shared/components/Modal";
import styles from "./BurgerMenu.module.scss";
import { items } from "../items";
import MenuItem from "../MenuItem";

const BurgerMenu = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const loginMenu = items.login.map(({ id, ...props }) => (
    <MenuItem
      key={id}
      {...props}
      onNavigate={closeModal}
      className={styles.navlink}
      activeClassName={styles.navlinkActive}
    />
  ));

  const menu = <div className={styles.modalItems}>{loginMenu}</div>;

  return (
    <div>
      <button type="button" onClick={toggleModal} className={styles.burgerBtn}>
        {showModal ? <CloseBtn /> : <MenuBtn />}
      </button>
      {showModal && (
        <Modal onClose={closeModal} variant="fullscreen" hideCloseButton>
          {menu}
        </Modal>
      )}
    </div>
  );
};

export default BurgerMenu;
