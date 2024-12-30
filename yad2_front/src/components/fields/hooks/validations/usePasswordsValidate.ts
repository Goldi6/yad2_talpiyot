import { useState } from "react";
import { errors as errObj } from "../../../../module/messages/errors/index";

const containsLetterAndNumber = (inputString: string): boolean => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)/;
  return regex.test(inputString);
};

export default function usePasswordsValidate() {
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [err, setErr] = useState<string | null>(null);

  const errors = {
    empty: errObj.MISSING_PASSWORD.msg,
    length: errObj.INVALID_PASSWORD_FORMAT_LENGTH.msg,
    invalid: errObj.INVALID_PASSWORD_FORMAT.msg,
    passwordMatch: errObj.PASSWORDS_DONT_MATCH.msg,
  };

  const validatePasswords = (): boolean => {
    if (password === "") {
      setErr(errors.empty);
      return false;
    }
    if (!containsLetterAndNumber(password)) {
      setErr(errors.invalid);
      return false;
    }
    if (password.length < 8 || password.length > 20) {
      setErr(errors.length);
      return false;
    }
    if (password !== password2) {
      setErr(errors.passwordMatch);
      return false;
    }
    setErr(null);
    return true;
  };

  return {
    password,
    setPassword,
    password2,
    setPassword2,
    validatePasswords,
    doublePasswordErr: err,
    setDoublePasswordErr: setErr,
  };
}
