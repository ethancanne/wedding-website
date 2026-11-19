"use client";

import React, { useEffect, useState } from "react";
import { wedding } from "@/config/wedding";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

function calculateTimeRemaining(targetIso: string, nowMs: number): TimeRemaining {
  const targetMs = new Date(targetIso).getTime();

  if (Number.isNaN(targetMs) || nowMs >= targetMs) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isPast: true,
    };
  }

  const totalSeconds = Math.floor((targetMs - nowMs) / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
    isPast: false,
  };
}

export function Countdown() {
  const [nowMs, setNowMs] = useState<number | null>(null);

  useEffect(() => {
    const initialTimer = window.setTimeout(() => {
      setNowMs(Date.now());
    }, 0);

    const intervalId = window.setInterval(() => {
      setNowMs(Date.now());
    }, 1000);

    return () => {
      window.clearTimeout(initialTimer);
      window.clearInterval(intervalId);
    };
  }, []);

  const mounted = nowMs !== null;
  const timeLeft = mounted
    ? calculateTimeRemaining(wedding.isoDateTime, nowMs)
    : { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: false };

  const units = [
    { label: timeLeft.days === 1 ? "Day" : "Days", value: timeLeft.days, pad: false },
    { label: timeLeft.hours === 1 ? "Hour" : "Hours", value: timeLeft.hours, pad: true },
    { label: timeLeft.minutes === 1 ? "Minute" : "Minutes", value: timeLeft.minutes, pad: true },
    { label: timeLeft.seconds === 1 ? "Second" : "Seconds", value: timeLeft.seconds, pad: true },
  ];

  return (
    <section
      aria-label="Wedding Countdown"
      className="relative w-full bg-gradient-to-b from-ivory via-cream/75 to-cream border-b border-terracotta/25 pt-10 pb-14 sm:pt-14 sm:pb-20 px-5 sm:px-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        {/* Subtle Kicker */}
        <p className="text-[11px] uppercase tracking-[0.3em] text-terracotta-dark mb-3">
          {wedding.dayOfWeek}, {wedding.displayDate}{" "}
          <span className="text-terracotta mx-1">&bull;</span> {wedding.displayTime}
        </p>

        {mounted && timeLeft.isPast ? (
          <div className="py-4">
            <h2 className="font-script text-4xl sm:text-5xl text-olive mb-3">
              {wedding.countdown.completedHeading}
            </h2>
            <p className="font-serif italic text-lg sm:text-xl text-muted max-w-xl mx-auto">
              {wedding.countdown.completedMessage}
            </p>
          </div>
        ) : (
          <>
            <h2 className="font-serif italic text-2xl sm:text-3xl text-olive mb-8 sm:mb-10">
              {wedding.countdown.heading}
            </h2>

            <div
              role="timer"
              aria-live="off"
              aria-atomic="true"
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 max-w-2xl mx-auto border border-terracotta/35 bg-ivory/85 shadow-[0_4px_24px_rgba(107,112,66,0.05)] py-6 sm:py-8 px-4 sm:px-2"
            >
              {units.map((unit, idx) => {
                const displayNumber = !mounted
                  ? "—"
                  : unit.pad
                  ? String(unit.value).padStart(2, "0")
                  : String(unit.value);

                return (
                  <div
                    key={unit.label}
                    className={`flex flex-col items-center justify-center px-3 py-2 ${
                      idx < units.length - 1
                        ? "sm:border-r sm:border-terracotta/30"
                        : ""
                    }`}
                  >
                    <span className="font-serif text-4xl sm:text-5xl md:text-[54px] font-normal text-olive tabular-nums leading-none tracking-tight">
                      {displayNumber}
                    </span>
                    <span className="mt-2.5 text-[10px] sm:text-[11px] uppercase tracking-[0.26em] text-terracotta-dark">
                      {unit.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
