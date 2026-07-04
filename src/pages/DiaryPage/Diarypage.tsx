import DiaryProductsList from "./DiaryProductsList";
import DiaryAddProductForm from "./DiaryAddProductForm";
import DiaryDateCalendar from "./DiaryDateCalendar";
import Modal from "../../shared/components/Modal";

import { useState } from "react";

import styles from "./DiaryPage.module.scss";
import AuthorizedPageContainer from "../../shared/containerPage/AuthorizedPage/AuthorizedPage";

const DiaryPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <AuthorizedPageContainer>
      <div className={styles.DiaryConteiner}>
        <div className={styles.DiaryCalendar}>
          <DiaryDateCalendar />
        </div>
        <DiaryProductsList />
        <button onClick={handleOpenModal} className={styles.OpenFormButton}>
          +
        </button>
        {isOpen && (
          <Modal onClose={handleCloseModal}>
            <DiaryAddProductForm onSuccess={handleCloseModal} />
          </Modal>
        )}
      </div>
    </AuthorizedPageContainer>
  );
};

export default DiaryPage;
