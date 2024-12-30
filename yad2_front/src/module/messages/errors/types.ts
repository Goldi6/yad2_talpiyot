export type ErrorHttpStatusCode = 400 | 401 | 403 | 404 | 409 | 422 | 500;

export type ErrorObject = {
  msg: string;
  status: ErrorHttpStatusCode;
};

// type Errors = {
//   [K in ErrName]?: ErrorObject;
// }; // bad example because it allows for any string as a key (react will force you to check for undefined)
export type ErrName =
  | "MISSING_EMAIL"
  | "MISSING_PASSWORD"
  | 'MISSING_TOKEN'
  | "INVALID_EMAIL_FORMAT"
  | "INVALID_PASSWORD_FORMAT"
  | "INVALID_PASSWORD_FORMAT_LENGTH"
  | "INVALID_EMAIL_DOMAIN"
  | "EMAIL_ALREADY_REGISTERED"
  | "WRONG_LOGIN_CREDENTIALS"
  | "MISSING_REQUEST_BODY"
  | "DEFAULT"
  | "INVALID_EMAIL"
  | "PASSWORDS_DONT_MATCH"
  | "WRONG_REGISTRATION_CODE"
  | "ERR_NETWORK"
  | "MIN_AGE"
  | "USER_DOESNT_EXIST"
  | "MISSING_NAME"
  | "MISSING_SURNAME"
  | "MISSING_PHONE"
  | "INVALID_NAME_FORMAT"
  | "INVALID_PHONE_FORMAT"
  | "ALREADY_LOGGED_IN"
  | 'NOT_AUTHORIZED'
  | 'NAME_IS_REQUIRED'
  | 'SURNAME_IS_REQUIRED'
  | 'EMAIL_IS_REQUIRED'
  | 'PASSWORD_IS_REQUIRED'
  | 'PHONE_IS_REQUIRED'
  | 'CITY_IS_REQUIRED'
  | 'STREET_IS_REQUIRED'
  | 'HOUSE_NUMBER_IS_REQUIRED'
  | 'BIRTHDAY_IS_REQUIRED'
  ;

export type Errors = {
  MISSING_EMAIL: ErrorObject;
  MISSING_NAME: ErrorObject;
  MISSING_SURNAME: ErrorObject;
  MISSING_PHONE: ErrorObject;
  MISSING_PASSWORD: ErrorObject;
  MISSING_TOKEN: ErrorObject;
  INVALID_NAME_FORMAT: ErrorObject;
  INVALID_PHONE_FORMAT: ErrorObject;
  INVALID_EMAIL_FORMAT: ErrorObject;
  INVALID_EMAIL: ErrorObject;
  INVALID_PASSWORD_FORMAT: ErrorObject;
  INVALID_PASSWORD_FORMAT_LENGTH: ErrorObject;
  PASSWORDS_DONT_MATCH: ErrorObject;
  INVALID_EMAIL_DOMAIN: ErrorObject;
  EMAIL_ALREADY_REGISTERED: ErrorObject;
  WRONG_LOGIN_CREDENTIALS: ErrorObject;
  USER_DOESNT_EXIST: ErrorObject;
  MISSING_REQUEST_BODY: ErrorObject;
  DEFAULT: ErrorObject;
  ERR_NETWORK: ErrorObject;
  WRONG_REGISTRATION_CODE: ErrorObject;
  MIN_AGE: (minDate: string) => ErrorObject;
  ALREADY_LOGGED_IN: ErrorObject;
  NOT_AUTHORIZED: ErrorObject;

  NAME_IS_REQUIRED: ErrorObject;
  SURNAME_IS_REQUIRED: ErrorObject;
  EMAIL_IS_REQUIRED: ErrorObject;
  PASSWORD_IS_REQUIRED: ErrorObject;
  PHONE_IS_REQUIRED: ErrorObject;
  CITY_IS_REQUIRED: ErrorObject;
  STREET_IS_REQUIRED: ErrorObject;
  HOUSE_NUMBER_IS_REQUIRED: ErrorObject;
  BIRTHDAY_IS_REQUIRED: ErrorObject;

};
