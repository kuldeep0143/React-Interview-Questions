import { useEffect } from "react";
import { useState } from "react";

const useTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  const start = () => {
    setIsActive(true);
  };

  const pause = () => {
    setIsActive(false);
  };
  const resume = () => {
    setIsActive(true);
  };
  const reset = () => {
    setIsActive(false);
    setSeconds(0);
  };

  return {
    seconds,
    isActive,
    start,
    pause,
    resume,
    reset,
  };
};

export default useTimer;
