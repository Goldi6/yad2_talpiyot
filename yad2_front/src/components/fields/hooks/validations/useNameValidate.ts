import { useEffect, useState } from "react";
import { errors as errObj } from "../../../../module/messages/errors/index";

const validAlpha = (inputString: string): boolean => {
  const regex = /^[a-zA-Z\u0590-\u05FF\s]*$/;
  return regex.test(inputString);
};

export default function useNameValidate(initialEmail: string = "") {
  const [name, setName] = useState<string>(initialEmail);
  const [err, setErr] = useState<string | null>(null);

  const errors = {
    empty: errObj.MISSING_NAME.msg,
    invalid: errObj.INVALID_NAME_FORMAT.msg,
  };

  const validateName = (): boolean => {
    if (name === "") {
      setErr(errors.empty);
      return false;
    }

    if (!validAlpha(name)) {
      setErr(errors.invalid);
      return false;
    }
    setErr(null);
    return true;
  };

  useEffect(() => {
    setErr(null);
  }, [name]);

  return { name, setName, nameErr: err, setNameErr: setErr, validateName };
}
