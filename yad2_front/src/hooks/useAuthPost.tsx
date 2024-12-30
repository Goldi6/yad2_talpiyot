import { useState } from "react"
import { RegisterDataTypeMap, ReqType, postAuth } from "../services/authFetch"
import { useNavigate } from "react-router-dom"
import { StyledInputError } from "../components/fields/StyledInputs/field.styled";


type Props<T extends ReqType> = {
  data: RegisterDataTypeMap[T];
  authType: T;
  navigateOnSuccessUrl?: string;
};

export default function useAuthPost<T extends ReqType>({
  navigateOnSuccessUrl,
  data,
  authType,
}: Props<T>) {





  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [errName, setErrName] = useState<string | null>(null);
  const navigate = useNavigate();
  const post = async () => {

    try {
      const res = await postAuth(data, authType);
      //ERROR: remove code when email service is implemented
      const code = res?.code || undefined;
      if (navigateOnSuccessUrl) {
        navigate(navigateOnSuccessUrl, { state: { email: data.email, code, success: true }, replace: true })
      }
    } catch (err: any) {

      console.log('ALERT!!!')
      if (err.message) {

        console.error(err)

        setErrorMessage(() => err.message)
        setErrName(() => err.name);

      } else {

        console.log('UN HANDLED ERROR: ', err)

      }
    }
  }


  const ErrComponent = () => <StyledInputError>{errorMessage}</StyledInputError>;
  return { errorMessage, setErrorMessage, post, ErrComponent, errName }
}