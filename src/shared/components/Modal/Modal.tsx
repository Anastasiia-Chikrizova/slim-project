import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { useModal } from "../../hooks/useModal";
import styles from "./Modal.module.scss";

interface ModalProps {
  onClose: () => void;
  children?: ReactNode;
  variant?: "default" | "fullscreen";
  hideCloseButton?: boolean;
}

const Modal = ({ onClose, children, variant = "default", hideCloseButton = false }: ModalProps) => {
  const { handleBackdropClick } = useModal(onClose);

  const containerClassName =
    variant === "fullscreen" ? `${styles.container} ${styles.fullscreen}` : styles.container;

  return createPortal(
    <div className={styles.overlay} onClick={handleBackdropClick} role="presentation">
      <div className={containerClassName}>
        {!hideCloseButton && (
          <>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="Close"
            />
            <div className={styles.mobileBackground}>
              <button
                type="button"
                className={styles.closeBtnMobile}
                onClick={onClose}
                aria-label="Close"
              />
            </div>
          </>
        )}
        <div className={styles.content}>{children}</div>
      </div>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
