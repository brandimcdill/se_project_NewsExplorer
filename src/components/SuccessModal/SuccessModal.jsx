import "./SuccessModal.css";

function SuccessModal({ isOpen, onClose, onSignInClick }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container modal__container_type_success">
        <button
          type="button"
          className="modal__close-btn"
          onClick={onClose}
          aria-label="Close modal"
        />
        <h3 className="modal__title modal__title_type_success">
          Registration successfully completed!
        </h3>
        <button type="button" className="modal__link-btn" onClick={onSignInClick}>
          Sign in
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;
