import useSWR from "swr";
import { fetcher } from "../services/fetcher";

export default function useUser() {
  const { data, error, isLoading } = useSWR(
    `/auth/user`,

    fetcher
  );


  console.log('DATA', data);
  //profile avatar && users   likes (count of last 3 likes)
  return {
    user: data,
    isLoading,
    error,
  };
}
