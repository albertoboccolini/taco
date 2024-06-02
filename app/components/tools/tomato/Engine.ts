import React, { useEffect, useState } from "react";

export const Engine = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [tomatoCount, setTomatoCount] = useState(1);
  const [cycles, setCycles] = useState(0);
  const [totalStudyTime, setTotalStudyTime] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          let nextMinutes = cycles % 2 === 0 ? 5 : 25;
          if (cycles % 2 === 0) {
            setTotalStudyTime((prev) => prev + 25);
          }
          setMinutes(nextMinutes);
          setSeconds(0);
          setCycles(cycles + 1);

          if (cycles % 2 !== 0) {
            if (tomatoCount > 1) {
              setTomatoCount(tomatoCount - 1);
            } else {
              setIsActive(false);
            }
          }
        }
      }, 1000);
    } else if (!isActive && minutes === 0 && seconds === 0) {
      setMinutes(25);
      setSeconds(0);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, minutes, seconds, cycles, tomatoCount]);

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };

  const handleTomatoCountChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setTomatoCount(parseInt(event.target.value, 10));
    setCycles(0);
  };

  return {
    minutes,
    seconds,
    handleTomatoCountChange,
    tomatoCount,
    toggleIsActive,
    isActive,
    totalStudyTime,
  };
};
export default Engine;
