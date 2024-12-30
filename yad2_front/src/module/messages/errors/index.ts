//hello
import { ErrName, ErrorHttpStatusCode, Errors, ErrorObject } from "./types";
const errors: Errors = {
  //auth
  MISSING_EMAIL: { msg: "לא לשכוח את המייל", status: 400 },
  MISSING_PASSWORD: { msg: "לא לשכוח להזין סיסמה", status: 400 },
  MISSING_NAME: { msg: "נבקש למלא את השם", status: 400 },
  MISSING_SURNAME: { msg: "נבקש למלא את שם המשפחה", status: 400 },
  MISSING_PHONE: { msg: "היי, לא לשכוח למלא מספר טלפון", status: 400 },
  MISSING_TOKEN: { msg: "היי, נראה שהפסקת לנו את הקוד", status: 401 },   //unauthorized


  NAME_IS_REQUIRED: { msg: 'שם פרטי הוא שדה חובה', status: 422 },
  SURNAME_IS_REQUIRED: { msg: 'שם משפחה הוא שדה חובה', status: 422 },
  EMAIL_IS_REQUIRED: { msg: 'אימייל הוא שדה חובה', status: 422 },
  PASSWORD_IS_REQUIRED: { msg: 'סיסמה היא שדה חובה', status: 422 },
  PHONE_IS_REQUIRED: { msg: 'טלפון הוא שדה חובה', status: 422 },
  CITY_IS_REQUIRED: { msg: 'ישוב/עיר הוא שדה חובה', status: 422 },
  STREET_IS_REQUIRED: { msg: 'רחוב הוא שדה חובה', status: 422 },
  HOUSE_NUMBER_IS_REQUIRED: { msg: 'מספר בית הוא שדה חובה', status: 422 },
  BIRTHDAY_IS_REQUIRED: { msg: 'תאריך לידה הוא שדה חובה', status: 422 },

  INVALID_NAME_FORMAT: { msg: "שם עם ספרה? יש לנו עסק עם רובוט?", status: 422 },
  INVALID_EMAIL: { msg: "מייל לא תקין", status: 422 },
  INVALID_PHONE_FORMAT: { msg: "נבקש את מספר הנייד שלך", status: 422 },
  INVALID_EMAIL_FORMAT: {
    msg: "משהו לא תקין במייל, אולי התפספס @?",
    status: 422,
  },
  INVALID_PASSWORD_FORMAT: {
    msg: "נבקש שהסיסמה תכלול אותיות באנגלית וספרות",
    status: 422,
  },
  INVALID_PASSWORD_FORMAT_LENGTH: {
    msg: "נבקש סיסמה באורך 8-20 תווים",
    status: 422,
  },
  PASSWORDS_DONT_MATCH: { msg: "הסיסמאות לא זהות", status: 422 },
  INVALID_EMAIL_DOMAIN: { msg: "משהו השתבש, כדאי לנסות שוב", status: 422 },
  EMAIL_ALREADY_REGISTERED: { msg: "משהו השתבש, כדאי לנסות שוב", status: 409 },
  WRONG_LOGIN_CREDENTIALS: { msg: "אימייל או סיסמה אינם תקינים", status: 401 },
  USER_DOESNT_EXIST: { msg: "אימייל או סיסמה אינם תקינים", status: 401 },

  WRONG_REGISTRATION_CODE: { msg: "היי, זה לא הקוד ששלחנו לך", status: 401 },
  //general
  ERR_NETWORK: { msg: "משהו השתבש, כדאי לנסות שוב מאוחר יותר", status: 500 },

  MISSING_REQUEST_BODY: { msg: "משהו השתבש, כדאי לנסות שוב", status: 400 },
  DEFAULT: { msg: "שיגיאה לא ידועה", status: 500 },
  MIN_AGE: (minDate: string) => ({
    msg: `תאריך לידה צריך להיות נמוך מ-${minDate}`,
    status: 422,
  }),
  ALREADY_LOGGED_IN: { msg: "כבר מחובר", status: 409 },
  NOT_AUTHORIZED: { msg: "לא מורשה", status: 401 },
};

function getErrorValues(
  errName: ErrName,
  prop: string | undefined = undefined
): ErrorObject {
  if (errors[errName]) {
    if (prop && typeof errors[errName] === "function") {
      return (errors[errName] as (prop: string) => ErrorObject)(prop);
    }
    return errors[errName] as ErrorObject;
  }
  return errors.DEFAULT as ErrorObject;
}

class CustomError extends Error {
  status: ErrorHttpStatusCode;

  constructor(message: string, status: number, name: string) {
    super(message);
    this.status = status as ErrorHttpStatusCode;
    this.name = name;
  }
}

function setError(errName: ErrName, prop: string | undefined = undefined) {
  const { msg, status } = getErrorValues(errName, prop);
  return new CustomError(msg, status, errName);
}

export { setError, errors, getErrorValues };

//     400: //bad request

//     401: //unauthorized

//     403: //forbidden (user not verified for specific role)

//     404: //not found

//     409: //conflict

//     422: //unprocessable entity (validation error (email/password/email domain ect...) * server understood request)

//     500: //internal server error
