import css from "./Modal.module.scss";
import DiaryAddProductForm from "../DiaryAddProductForm";

interface ModalProps {
  onClose: () => void;
}

const Modal = ({ onClose }: ModalProps) => {
  return (
    <>
      <button className={css.closeBtn} onClick={onClose}>
        ⮨
      </button>
      <DiaryAddProductForm />
    </>
  );
};

export default Modal;