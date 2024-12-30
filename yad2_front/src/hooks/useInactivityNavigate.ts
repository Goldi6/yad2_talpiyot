import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  dataState: {
    email?: string;

  };
}

export default function useInactivityNavigate({ dataState }: Props) {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/auth/session-expired/registration", { state: dataState });
    }, 1000 * 60 * 5);
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
