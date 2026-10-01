import { useState, useCallback } from "react";

export function useFormAndValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let customErrorMessage = e.target.validationMessage;

    if (e.target.validity.valid === false && customErrorMessage !== "") {
      if (name === "email" && (e.target.validity.typeMismatch || e.target.validity.valueMissing)) {
        customErrorMessage = "Invalid email address";
      } else if (
        name === "password" &&
        (e.target.validity.tooShort || e.target.validity.valueMissing)
      ) {
        customErrorMessage = "Invalid password";
      } else if (
        name === "username" &&
        (e.target.validity.tooShort || e.target.validity.valueMissing)
      ) {
        customErrorMessage = "Invalid username";
      }
    }

    setValues((prevValues) => ({ ...prevValues, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: customErrorMessage }));
    setIsValid(e.target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid };
}
