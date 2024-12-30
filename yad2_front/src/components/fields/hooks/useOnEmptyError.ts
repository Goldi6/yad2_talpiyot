import { useEffect, useRef } from "react"
const { errors } = require('../../../module/messages/errors/index')
type Props = {
    state: [string, React.Dispatch<React.SetStateAction<string>>],
    setErr: React.Dispatch<React.SetStateAction<string | null>>,
    ERR_NAME: 'NAME_IS_REQUIRED'
    | 'SURNAME_IS_REQUIRED'
    | 'EMAIL_IS_REQUIRED'
    | 'PASSWORD_IS_REQUIRED'
    | 'PHONE_IS_REQUIRED'
    | 'CITY_IS_REQUIRED'
    | 'STREET_IS_REQUIRED'
    | 'HOUSE_NUMBER_IS_REQUIRED'
    | 'BIRTHDAY_IS_REQUIRED',
}


export const useOnEmptyError = ({ state, setErr, ERR_NAME }: Props) => {

    const initial = useRef(state[0]);
    const firstUpdate = useRef(true);




    useEffect(() => {

        if (firstUpdate.current) {
            if (initial.current !== state[0])
                firstUpdate.current = false;

        } else {

            if (state[0] === "") {
                setErr(() => errors[ERR_NAME].msg);
            } else {
                setErr(() => null);
            }
        }
    }, [state, setErr, ERR_NAME, initial])






}