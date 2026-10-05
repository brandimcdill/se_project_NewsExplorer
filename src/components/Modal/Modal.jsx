import { useEffect } from "react";
import "./Modal.css";

export const Modal = ({ name, isOpen, onClose, children }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal ${isOpen ? "modal_opened" : ""} modal_type_${name}`}
      onClick={handleOverlay}
    >
      <div className="modal__container">
        {children}
        <button className="modal__close-btn" type="button" onClick={onClose} />
      </div>
    </div>
  );
};

export default Modal;
