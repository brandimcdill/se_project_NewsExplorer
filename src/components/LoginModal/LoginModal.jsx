import { useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function LoginModal({ isOpen, onClose, onAltBtnClick, handleLogin }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation();

  useEffect(() => {
    if (isOpen) resetForm();
  }, [isOpen, resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      handleLogin(values.email, values.password, "User");
    }
  };

  return (
    <ModalWithForm
      title="Sign in"
      btnText="Sign in"
      name="login"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      altBtnText="Sign up"
      onAltBtnClick={onAltBtnClick}
      isDisabled={!isValid}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          name="email"
          className="modal__input"
          placeholder="Enter email"
          value={values.email || ""}
          onChange={handleChange}
          required
        />
        <span className="modal__error modal__error_visible">{errors.email}</span>
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          name="password"
          className="modal__input"
          placeholder="Enter password"
          minLength="4"
          value={values.password || ""}
          onChange={handleChange}
          required
        />
        <span className="modal__error modal__error_visible">{errors.password}</span>
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
