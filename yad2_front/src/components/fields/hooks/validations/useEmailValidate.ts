import { useEffect, useState } from "react";
import { errors as errObj } from "../../../../module/messages/errors/index";

const hasAtSymbolAfterChars = (inputString: string): boolean => {
  const regex = /.{2,}@/;
  return regex.test(inputString);
};

const validEmailFormat = (inputString: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(inputString);
};

export default function useEmailValidate(initialEmail: string = "") {
  const [email, setEmail] = useState<string>(initialEmail);
  const [err, setErr] = useState<string | null>(null);

  const errors = {
    empty: errObj.MISSING_EMAIL.msg,
    missing_shtrudel: errObj.INVALID_EMAIL_FORMAT.msg,
    invalid: errObj.INVALID_EMAIL.msg,
  };

  const validateEmail = (): boolean => {
    if (email === "") {
      setErr(errors.empty);
      return false;
    }
    if (!hasAtSymbolAfterChars(email)) {
      setErr(errors.missing_shtrudel);
      return false;
    }
    if (!validEmailFormat(email)) {
      setErr(errors.invalid);
      return false;
    }
    setErr(null);
    return true;
  };

  useEffect(() => {
    setErr(null);
  }, [email]);

  return { email, setEmail, emailErr: err, setEmailErr: setErr, validateEmail };
}
