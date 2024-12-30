import { Navigate } from "react-router-dom";
import useUser from "../hooks/useUser";

type Props = { children: React.ReactNode }

export default function PrivetRoute({ children }: Props) {

    const { user, isLoading, error } = useUser();

    if (!user) {
        return <Navigate to='/login' />
    }
    return (
        <>{children}</>
    )
}