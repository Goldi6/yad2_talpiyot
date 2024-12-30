import { useEffect, useState } from "react";
import { errors as errObj } from "../../../../module/messages/errors/index";

const validCodeFormat = (inputString: string): boolean => {
  const regex = /^[0-9]+$/;
  return regex.test(inputString);
};

export default function useCodeValidate(initialCode: string = "") {
  const [code, setCode] = useState<string>(initialCode);
  const [err, setErr] = useState<string | null>(null);

  const errors = {
    empty: errObj.WRONG_REGISTRATION_CODE.msg,
    invalid: errObj.WRONG_REGISTRATION_CODE.msg,
  };

  const validateCode = (): boolean => {
    if (code === "") {
      setErr(errors.empty);
      return false;
    }
    if (code.length !== 6) {
      setErr(errors.invalid);
      return false;
    }
    if (!validCodeFormat(code)) {
      setErr(errors.invalid);
      return false;
    }
    setErr(null);
    return true;
  };

  useEffect(() => {
    setErr(null);
  }, [code]);

  return { code, setCode, codeErr: err, setCodeErr: setErr, validateCode };
}
