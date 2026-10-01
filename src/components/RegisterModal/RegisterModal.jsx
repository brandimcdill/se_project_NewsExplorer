import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function RegisterModal({ isOpen, onClose, onAltBtnClick, handleRegistrationSuccess }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation();

  useEffect(() => {
    if (isOpen) resetForm();
  }, [isOpen, resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) {
      handleRegistrationSuccess(values.email, values.password, values.username);
    }
  };

  return (
    <ModalWithForm
      title="Sign up"
      btnText="Sign up"
      name="register"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      altBtnText="Sign in"
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
          minLength="4"
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
      <label className="modal__label">
        Username
        <input
          type="text"
          name="username"
          className="modal__input"
          placeholder="Enter your username"
          minLength="2"
          maxLength="30"
          value={values.username || ""}
          onChange={handleChange}
          required
        />
        <span className="modal__error modal__error_visible">{errors.username}</span>
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
