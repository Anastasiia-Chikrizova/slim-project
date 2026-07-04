import { ReactNode, useEffect, MouseEvent } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

interface ModalProps {
  onClose?: () => void;
  children?: ReactNode;
}

const Modal = ({ onClose = () => {}, children }: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleCloseButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    if ((e.target as HTMLElement).tagName === "BUTTON") {
      onClose();
    }
  };

  return createPortal(
    <div
      className={styles.modalMainContainerOverlay}
      onClick={handleBackdropClick}
      onKeyDown={(e) => e.key === "Escape" && onClose()}
      role="presentation"
    >
      <div className={styles.modalMainContainer}>
        <button className={styles.closeModalBtn} onClick={onClose} />
        <div className={styles.mobileBackground}>
          <button className={styles.closeModalBtnMobile} onClick={handleCloseButtonClick} />
        </div>
        <div className={styles.container}>{children}</div>
      </div>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
