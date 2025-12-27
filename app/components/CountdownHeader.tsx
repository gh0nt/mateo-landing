"use client";

import { useState, useEffect } from "react";

const CountdownHeader = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 1,
    minutes: 13,
    seconds: 23,
  });

  const [isGlowing, setIsGlowing] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const glowTimer = setInterval(() => {
      setIsGlowing((prev) => !prev);
    }, 1500);

    return () => clearInterval(glowTimer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <header className="w-full bg-fire-ember py-3 px-5">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 text-primary-foreground">
        <span className="text-sm sm:text-base font-medium uppercase tracking-wide">
          🔥 OFERTA ESPECIAL TERMINA EN:
        </span>
        <div
          className={`flex items-center gap-1 font-bold text-lg sm:text-xl transition-all duration-500 ${
            isGlowing ? "drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" : ""
          }`}
          style={{
            textShadow: isGlowing
              ? "0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.6), 0 0 30px rgba(255,255,255,0.4)"
              : "none",
          }}
        >
          <span className="bg-primary-foreground/20 px-2 py-1 rounded">
            {formatNumber(timeLeft.hours)}
          </span>
          <span>:</span>
          <span className="bg-primary-foreground/20 px-2 py-1 rounded">
            {formatNumber(timeLeft.minutes)}
          </span>
          <span>:</span>
          <span className="bg-primary-foreground/20 px-2 py-1 rounded">
            {formatNumber(timeLeft.seconds)}
          </span>
        </div>
      </div>
    </header>
  );
};

export default CountdownHeader;
