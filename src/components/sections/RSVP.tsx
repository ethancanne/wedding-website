"use client";

import React, { useState } from "react";
import { wedding } from "@/config/wedding";
import { Button } from "@/components/ui/Button";
import {
  WatercolorBotanicalBranch,
  WatercolorSunflowerAccent,
} from "@/components/ui/BotanicalAccents";

export function RSVP() {
  const [showPendingMessage, setShowPendingMessage] = useState(false);
  const configuredUrl = wedding.rsvpUrl.trim();
  const hasExternalUrl = configuredUrl.length > 0;

  return (
    <section
      id="rsvp"
      aria-labelledby="rsvp-heading"
      className="relative w-full stationery-ivory py-24 sm:py-32 px-5 sm:px-8 lg:px-12 border-b border-terracotta/25 scroll-mt-16 sm:scroll-mt-20"
    >
      <div className="mx-auto max-w-3xl">
        {/* Stationery Card Frame inspired by the back of the Wedding Invitation */}
        <div className="relative bg-cream/75 border border-terracotta/45 shadow-[0_10px_36px_rgba(107,112,66,0.06)] p-8 sm:p-14 md:p-16 text-center overflow-hidden">
          {/* Inner Hairline Frame */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-3 sm:inset-4 border border-terracotta/30"
          />

          {/* Subtle Watercolor Botanical Corner Illustrations matching the Invitation */}
          <WatercolorBotanicalBranch className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-22 h-28 opacity-40 sm:w-38 sm:h-46 sm:opacity-65" />
          <WatercolorSunflowerAccent className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-22 h-22 opacity-38 sm:w-36 sm:h-36 sm:opacity-55" />

          <div className="relative z-10 flex flex-col items-center">
            <p className="text-[11px] uppercase tracking-[0.34em] text-terracotta-dark mb-3">
              {wedding.rsvpSection.kicker}
            </p>

            <h2
              id="rsvp-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal text-olive tracking-tight"
            >
              {wedding.rsvpSection.heading}
            </h2>

            {/* Hairline & Monogram Divider with Invitation Name Colors */}
            <div
              aria-hidden="true"
              className="my-5 flex items-center justify-center gap-4 w-44 sm:w-52"
            >
              <span className="h-px flex-1 bg-terracotta/55" />
              <span className="font-script text-2xl sm:text-[28px] leading-none">
                <span className="text-olive">{wedding.couple.firstName[0]}</span>{" "}
                <span className="font-serif italic text-xl text-terracotta">
                  &amp;
                </span>{" "}
                <span className="text-olive">{wedding.couple.partnerName[0]}</span>
              </span>
              <span className="h-px flex-1 bg-terracotta/55" />
            </div>

            <p className="text-sm sm:text-[15px] font-light text-muted leading-[1.85] max-w-lg mb-8">
              {wedding.rsvpSection.message}
            </p>

            <p className="font-serif text-lg sm:text-xl text-olive-dark font-medium mb-8">
              <span>{wedding.displayDate}</span>
              <span className="mx-3 text-terracotta">&bull;</span>
              <span>{wedding.displayTime}</span>
              <span className="mx-3 text-terracotta">&bull;</span>
              <span>{wedding.location.region}</span>
            </p>

            {hasExternalUrl ? (
              <Button
                href={configuredUrl}
                external
                variant="primary"
                size="lg"
                className="min-w-[220px]"
              >
                {wedding.rsvpSection.buttonLabel}
              </Button>
            ) : (
              <div className="flex flex-col items-center gap-4 w-full">
                <Button
                  type="button"
                  variant="primary"
                  size="lg"
                  onClick={() => setShowPendingMessage(true)}
                  aria-expanded={showPendingMessage}
                  aria-controls="rsvp-pending-notice"
                  className="min-w-[220px]"
                >
                  {wedding.rsvpSection.buttonLabel}
                </Button>

                {showPendingMessage && (
                  <p
                    id="rsvp-pending-notice"
                    role="status"
                    aria-live="polite"
                    className="mt-2 font-serif italic text-base sm:text-lg text-olive-dark bg-ivory/95 border border-terracotta/40 px-5 py-3 max-w-md"
                  >
                    {wedding.rsvpSection.pendingNotice}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
