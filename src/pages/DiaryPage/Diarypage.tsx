import DiaryProductsList from "./DiaryProductsList";
import DiaryAddProductForm from "./DiaryAddProductForm";
import DiaryDateCalendar from "./DiaryDateCalendar";
import Modal from "./Modal";

import { useState } from "react";

import styles from "./DiaryPage.module.scss";
import AuthorizedPageContainer from "../../shared/containerPage/AuthorizedPage/AuthorizedPage";

const DiaryPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <AuthorizedPageContainer>
      <div className={styles.DiaryConteiner}>
        {isOpen ? (
          <Modal
            onClose={() => {
              setIsOpen(false);
            }}
          />
        ) : (
          <>
            <div className={styles.DiaryCalendar}>
              <DiaryDateCalendar />
            </div>
            <div className={styles.visuallyHidden}>
              <DiaryAddProductForm />
            </div>
            <DiaryProductsList />
            <button onClick={handleOpenModal} className={styles.OpenFormButton}>
              +
            </button>
          </>
        )}
      </div>
    </AuthorizedPageContainer>
  );
};

export default DiaryPage;
