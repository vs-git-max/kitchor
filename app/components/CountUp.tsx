/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useRef, useState } from "react";
import { BiPlus } from "react-icons/bi";

interface CountUpProps {
  end: number;
  duration?: number;
}

const CountUp = ({ end, duration = 5000 }: CountUpProps) => {
  const [index, setIndex] = useState<number>(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const increment = end / (duration / 40);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setIndex(Math.floor(start));
    }, 50);
    return () => clearInterval(timer);
  }, [end, duration, hasStarted]);

  return (
    <span
      ref={ref}
      className="text-xl md:text-4xl text-accent flex items-center font-bold"
    >
      {index}
      <BiPlus />
    </span>
  );
};

export default CountUp;
