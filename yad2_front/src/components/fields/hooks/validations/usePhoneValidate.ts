import { useEffect, useState } from "react";
import { errors as errObj } from "../../../../module/messages/errors";

const validPhoneFormat = (inputString: string): boolean => {
  const regex = /^05\d{8}$/;
  return regex.test(inputString);
};

export default function usePhoneValidate(initialPhone: string = "") {
  const [phone, setPhone] = useState<string>(initialPhone);
  const [phoneErr, setPhoneErr] = useState<string | null>(null);

  const errors = {
    empty: errObj.MISSING_PHONE.msg,
    invalid: errObj.INVALID_PHONE_FORMAT.msg,
  };

  const validatePhone = (): boolean => {
    if (phone === "") {
      setPhoneErr(errors.empty);
      return false;
    }

    if (!validPhoneFormat(phone)) {
      setPhoneErr(errors.invalid);
      return false;
    }
    setPhoneErr(null);
    return true;
  };

  useEffect(() => {
    setPhoneErr(null);
  }, [phone]);

  return {
    phone,
    setPhone,
    phoneErr,
    setPhoneErr,
    validatePhone,
  };
}
