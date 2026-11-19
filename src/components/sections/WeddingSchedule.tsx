import React from "react";
import { wedding } from "@/config/wedding";
import {
  InvitationAmpersandDivider,
  WatercolorSunflowerAccent,
} from "@/components/ui/BotanicalAccents";

export function WeddingSchedule() {
  return (
    <section
      id="schedule"
      aria-labelledby="schedule-heading"
      className="relative w-full stationery-cream py-20 sm:py-28 lg:py-32 px-5 sm:px-8 lg:px-12 border-b border-terracotta/25 scroll-mt-16 sm:scroll-mt-20 overflow-hidden"
    >
      {/* Subtle Watercolor Sunflower & Foliage Accent */}
      <WatercolorSunflowerAccent className="hidden xl:block absolute top-10 right-6 w-36 h-36 opacity-35" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <p className="text-[11px] uppercase tracking-[0.32em] text-terracotta-dark mb-3">
            {wedding.scheduleSection.kicker}
          </p>
          <h2
            id="schedule-heading"
            className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal text-olive tracking-tight"
          >
            {wedding.scheduleSection.heading}
          </h2>

          {/* Hairline & Ampersand Divider */}
          <InvitationAmpersandDivider className="mt-5 mb-6" />

          <p className="font-serif italic text-xl sm:text-2xl text-muted leading-relaxed">
            {wedding.scheduleSection.subtitle}
          </p>
        </div>

        {/* Integrated Layout: Vertical Order-of-Events Timeline + Guest Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-stretch">
          {/* Left: Vertical Timeline Card */}
          <div className="lg:col-span-7 bg-ivory/95 border border-terracotta/35 shadow-[0_6px_24px_rgba(107,112,66,0.04)] p-6 sm:p-10 md:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-terracotta/25 pb-4 mb-8">
                <span className="text-[11px] uppercase tracking-[0.28em] text-terracotta-dark">
                  Order of Events
                </span>
                <span className="font-serif italic text-base text-olive font-medium">
                  {wedding.displayDate}
                </span>
              </div>

              <ol className="relative border-l border-terracotta/50 ml-3 sm:ml-4 space-y-10 sm:space-y-12 py-2">
                {wedding.schedule.map((item, idx) => (
                  <li key={`${item.time}-${item.title}-${idx}`} className="relative pl-7 sm:pl-9">
                    {/* Timeline Node */}
                    <span
                      aria-hidden="true"
                      className="absolute -left-[6.5px] top-1.5 h-3 w-3 rounded-full border border-terracotta bg-gold/25 ring-4 ring-ivory"
                    />

                    {/* Time Badge */}
                    <p className="text-xs uppercase tracking-[0.26em] text-terracotta-dark font-medium">
                      {item.time}
                    </p>

                    {/* Event Title */}
                    <h3 className="mt-1.5 font-serif text-2xl sm:text-3xl text-olive font-normal">
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

            <div className="mt-10 pt-6 border-t border-terracotta/25 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-subtle">
              <span className="uppercase tracking-[0.22em] text-[10px]">
                {wedding.location.address}
              </span>
              <span className="font-script text-2xl text-olive">
                {wedding.hero.subnote}
              </span>
            </div>
          </div>

          {/* Right: Integrated Guest Information (Arrival & Dress Code) */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
            {/* Arrival Card */}
            <div className="flex-1 bg-ivory/95 border border-terracotta/35 shadow-[0_6px_24px_rgba(107,112,66,0.04)] p-6 sm:p-9 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <span
                  aria-hidden="true"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-terracotta/50 bg-gold/10 text-olive"
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
                <span className="text-[11px] uppercase tracking-[0.28em] text-terracotta-dark">
                  Guest Arrival
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-[28px] text-olive font-normal mb-3">
                Arrival
              </h3>

              <p className="text-sm sm:text-[15px] font-light text-muted leading-[1.85]">
                {wedding.arrivalInstructions}
              </p>
            </div>

            {/* Dress Code Card */}
            <div className="flex-1 bg-ivory/95 border border-terracotta/35 shadow-[0_6px_24px_rgba(107,112,66,0.04)] p-6 sm:p-9 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <span
                  aria-hidden="true"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-terracotta/50 bg-gold/10 text-olive"
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
                <span className="text-[11px] uppercase tracking-[0.28em] text-terracotta-dark">
                  Attire Guide
                </span>
              </div>

              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3.5">
                <h3 className="font-serif text-2xl sm:text-[28px] text-olive font-normal">
                  Dress Code
                </h3>
                <span className="font-serif italic text-xl text-terracotta-dark">
                  {wedding.dressCode.title}
                </span>
              </div>

              <p className="text-sm sm:text-[15px] font-light text-muted leading-[1.85]">
                {wedding.dressCode.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
