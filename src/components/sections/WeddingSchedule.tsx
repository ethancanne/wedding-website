import React from "react";
import { wedding } from "@/config/wedding";

export function WeddingSchedule() {
  return (
    <section
      id="schedule"
      aria-labelledby="schedule-heading"
      className="relative w-full bg-cream py-20 sm:py-28 lg:py-32 px-5 sm:px-8 lg:px-12 border-b border-taupe/25 scroll-mt-16 sm:scroll-mt-20"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <p className="text-[11px] uppercase tracking-[0.32em] text-subtle mb-3">
            {wedding.scheduleSection.kicker}
          </p>
          <h2
            id="schedule-heading"
            className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal text-ink tracking-tight"
          >
            {wedding.scheduleSection.heading}
          </h2>

          {/* Hairline & Ampersand Divider */}
          <div
            aria-hidden="true"
            className="mt-5 mb-6 flex items-center justify-center gap-4 max-w-[200px] mx-auto"
          >
            <span className="h-px flex-1 bg-taupe/50" />
            <span className="font-serif italic text-xl text-taupe">&amp;</span>
            <span className="h-px flex-1 bg-taupe/50" />
          </div>

          <p className="font-serif italic text-xl sm:text-2xl text-muted leading-relaxed">
            {wedding.scheduleSection.subtitle}
          </p>
        </div>

        {/* Integrated Layout: Vertical Order-of-Events Timeline + Guest Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left: Vertical Timeline Card */}
          <div className="lg:col-span-7 bg-ivory border border-taupe/35 p-7 sm:p-10 md:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-taupe/25 pb-4 mb-8">
                <span className="text-[11px] uppercase tracking-[0.28em] text-subtle">
                  Order of Events
                </span>
                <span className="font-serif italic text-base text-brown">
                  {wedding.displayDate}
                </span>
              </div>

              <ol className="relative border-l border-taupe/50 ml-3 sm:ml-4 space-y-10 sm:space-y-12 py-2">
                {wedding.schedule.map((item, idx) => (
                  <li key={`${item.time}-${item.title}-${idx}`} className="relative pl-7 sm:pl-9">
                    {/* Timeline Node */}
                    <span
                      aria-hidden="true"
                      className="absolute -left-[6.5px] top-1.5 h-3 w-3 rounded-full border border-brown bg-ivory ring-4 ring-ivory"
                    />

                    {/* Time Badge */}
                    <p className="text-xs uppercase tracking-[0.26em] text-brown font-medium">
                      {item.time}
                    </p>

                    {/* Event Title */}
                    <h3 className="mt-1.5 font-serif text-2xl sm:text-3xl text-ink font-normal">
                      {item.title}
                    </h3>

                    {item.subtitle && (
                      <p className="mt-0.5 font-serif italic text-base sm:text-lg text-subtle">
                        {item.subtitle}
                      </p>
                    )}

                    {item.description && (
                      <p className="mt-2.5 text-sm font-light text-muted leading-relaxed max-w-md">
                        {item.description}
                      </p>
                    )}
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-10 pt-6 border-t border-taupe/25 flex items-center justify-between text-xs text-subtle">
              <span className="uppercase tracking-[0.22em] text-[10px]">
                {wedding.location.address}
              </span>
              <span className="font-script text-2xl text-brown">
                {wedding.hero.subnote}
              </span>
            </div>
          </div>

          {/* Right: Integrated Guest Information (Arrival & Dress Code) */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
            {/* Arrival Card */}
            <div className="flex-1 bg-ivory border border-taupe/35 p-7 sm:p-9 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <span
                  aria-hidden="true"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-taupe/50 text-brown"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    className="w-3.5 h-3.5"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="text-[11px] uppercase tracking-[0.28em] text-subtle">
                  Guest Arrival
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-[28px] text-ink font-normal mb-3">
                Arrival
              </h3>

              <p className="text-sm sm:text-[15px] font-light text-muted leading-[1.8]">
                {wedding.arrivalInstructions}
              </p>
            </div>

            {/* Dress Code Card */}
            <div className="flex-1 bg-ivory border border-taupe/35 p-7 sm:p-9 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <span
                  aria-hidden="true"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-taupe/50 text-brown"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    className="w-3.5 h-3.5"
                  >
                    <path
                      d="M12 3L9 7.5 4 9l4 4.5L7 19l5-2.5L17 19l-1-5.5L20 9l-5-1.5L12 3z"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-[11px] uppercase tracking-[0.28em] text-subtle">
                  Attire Guide
                </span>
              </div>

              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <h3 className="font-serif text-2xl sm:text-[28px] text-ink font-normal">
                  Dress Code
                </h3>
                <span className="font-serif italic text-xl text-brown">
                  {wedding.dressCode.title}
                </span>
              </div>

              <p className="text-sm sm:text-[15px] font-light text-muted leading-[1.8]">
                {wedding.dressCode.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
