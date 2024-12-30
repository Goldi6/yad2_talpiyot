import { Navigate } from "react-router-dom";
import useUser from "../hooks/useUser";

type Props = { children: React.ReactNode }

export default function PublicOnlyRoute({ children }: Props) {

    const { user } = useUser();

    if (user) {
        return <Navigate to='/' />
    }
    return (
        <>{children}</>
    )
}