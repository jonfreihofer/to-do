import { useState } from "react";

export default function useValidate() {
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const validateEmail = (email) => {
    if (!email) return setEmailIsValid(true);
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailIsValid(true);
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailIsValid(false);
    }
    return setEmailIsValid;
  };
  const validatePassword = (password) => {
    if (password.length > 4 && password.length <= 16) {
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(false);
    }
    return;
  };

  return {
    emailIsValid,
    setEmailIsValid,
    passwordIsValid,
    validatePassword,
    validateEmail,
  };
}
