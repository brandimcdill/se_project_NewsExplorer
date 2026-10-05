import Modal from "../Modal/Modal";
import "./ModalWithForm.css";

function ModalWithForm({
  children,
  btnText,
  title,
  isOpen,
  onClose,
  onSubmit,
  name,
  altBtnText,
  onAltBtnClick,
}) {
  if (!isOpen) return null;

  return (
    <Modal name={name} isOpen={isOpen} onClose={onClose}>
      <h3 className="modal__title">{title}</h3>
      <form className="modal__form" name={name} onSubmit={onSubmit}>
        {children}
        <button type="submit" className="modal__submit-btn">
          {btnText}
        </button>
      </form>
      {altBtnText && (
        <p className="modal__alt-text">
          or{" "}
          <button type="button" className="modal__alt-btn" onClick={onAltBtnClick}>
            {altBtnText}
          </button>
        </p>
      )}
    </Modal>
  );
}

export default ModalWithForm;
