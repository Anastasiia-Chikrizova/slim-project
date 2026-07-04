import { ReactNode } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

interface ModalProps {
  children?: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const modalBurger = document.querySelector("#modal-burger") as HTMLElement;
  return createPortal(
    <div className={styles.Modal}>{children}</div>,
    modalBurger
  );
};

export default Modal;
