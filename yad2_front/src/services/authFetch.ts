import axios from "axios";
import { baseUrl } from "./fetcher";
import { errHandler } from "./errHandler";
import { mutate } from "swr";

export type RegisterDataTypeMap = {
  login: { email: string; password: string };
  register: { email: string; name: string; surname: string; phone: string };
  sendCode: { email: string; password: string };
  resendCode: { email: string };
  verifyCode: { email: string; code: string };
};

export type RegisterDataType = {
  email: string;
  password?: string;
  code?: string;
};

export type ReqType = keyof RegisterDataTypeMap;

export const postAuth = async <T extends ReqType>(
  data: RegisterDataTypeMap[T],
  type: T
) => {
  let path = "";
  switch (type) {
    case "login":
      path = baseUrl + "/auth/login";
      break;
    case "sendCode":
      path = baseUrl + "/auth/register/send-email-code";
      break;
    case "resendCode":
      path = baseUrl + "/auth/register/resend-email-code";
      break;
    case "verifyCode":
      path = baseUrl + "/auth/register/submit-email-code";
      break;
    case "register":
      path = baseUrl + "/auth/register/complete-registration";
      break;
    // default:
    //   path = base + "/error";
  }




  //!! IMPORTANT: withCredentials: true is required for cookies to be sent to the server
  return await axios
    .post(path, data, { withCredentials: true })
    .then((response) => {
      // Handle successful response
      console.info("Response:", response.data);
      return response.data;
    })
    .catch((error) => {
      // Handle error
      return errHandler(error);

    });
};



// ─── Get ─────────────────────────────────────────────────────────────────────

type GetReqType = 'logout';

//IMPORTANT: signal to the server about logout action!

export const getAuth = async (

  type: GetReqType
) => {
  let path = "";
  switch (type) {
    case "logout":
      path = baseUrl + "/auth/logout";
      break;

    // default:
    //   path = base + "auth/login";
  }



  //!! IMPORTANT: withCredentials: true is required for cookies to be sent to the server
  return await axios
    .get(path, { withCredentials: true })
    .then((response) => {
      // Handle successful response

      console.info("Response:", response.data);
      mutate('/auth/user')

      return response.data;

    })
    .catch((error) => {
      // Handle error
      return errHandler(error);
    });
};
