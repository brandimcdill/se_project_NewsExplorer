import React from "react";
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
  return (
    <div className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container">
        <button
          type="button"
          className="modal__close-btn"
          onClick={onClose}
          aria-label="Close modal"
        />
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
      </div>
    </div>
  );
}

export default ModalWithForm;
