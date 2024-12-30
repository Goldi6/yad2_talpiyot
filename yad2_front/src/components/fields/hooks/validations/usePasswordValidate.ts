import { useEffect, useState } from "react";
import { errors as errObj } from "../../../../module/messages/errors";

export default function usePasswordValidate() {
  const [password, setPassword] = useState<string>("");
  const [err, setErr] = useState<string | null>(null);

  const errors = {
    empty: errObj.MISSING_PASSWORD.msg,
  };

  const validatePassword = (): boolean => {
    if (password === "") {
      setErr(errors.empty);
      return false;
    }

    setErr(null);
    return true;
  };

  useEffect(() => {
    setErr(null);
  }, [password]);

  return {
    password,
    setPassword,
    passwordErr: err,
    setPasswordErr: setErr,
    validatePassword,
  };
}
