import { useEffect, useState } from "react";
import { getTimeDifference } from "../lib/utils";

export function useCountDown({ duration }: { duration?: string | null }) {
  const [countdown, setTimeRemain] = useState<string | null>();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemain(getTimeDifference(duration));
    }, 6000);

    return () => clearInterval(interval);
  }, [duration]);

  return {
    countdown: countdown || getTimeDifference(duration),
  };
}
