import { useEffect, useState } from "react";

export default function useCountDown(secondsToCount: number) {
  const [seconds, setSeconds] = useState(secondsToCount);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [seconds]);

  return seconds;
}
