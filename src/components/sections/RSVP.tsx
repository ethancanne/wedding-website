"use client";

import React, { useState } from "react";
import { wedding } from "@/config/wedding";
import { Button } from "@/components/ui/Button";

export function RSVP() {
  const [showPendingMessage, setShowPendingMessage] = useState(false);
  const configuredUrl = wedding.rsvpUrl.trim();
  const hasExternalUrl = configuredUrl.length > 0;

  return (
    <section
      id="rsvp"
      aria-labelledby="rsvp-heading"
      className="relative w-full bg-ivory py-24 sm:py-32 px-5 sm:px-8 lg:px-12 border-b border-taupe/25 scroll-mt-16 sm:scroll-mt-20"
    >
      <div className="mx-auto max-w-3xl">
        {/* Stationery Card Frame */}
        <div className="relative bg-cream/65 border border-taupe/40 p-8 sm:p-14 md:p-16 text-center">
          {/* Inner Hairline Frame */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-3 sm:inset-4 border border-taupe/25"
          />

          <div className="relative z-10 flex flex-col items-center">
            <p className="text-[11px] uppercase tracking-[0.34em] text-subtle mb-3">
              {wedding.rsvpSection.kicker}
            </p>

            <h2
              id="rsvp-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal text-ink tracking-tight"
            >
              {wedding.rsvpSection.heading}
            </h2>

            {/* Hairline & Ampersand Divider */}
            <div
              aria-hidden="true"
              className="my-5 flex items-center justify-center gap-4 w-44 sm:w-52"
            >
              <span className="h-px flex-1 bg-taupe/55" />
              <span className="font-script text-2xl text-brown">
                {wedding.couple.monogram}
              </span>
              <span className="h-px flex-1 bg-taupe/55" />
            </div>

            <p className="text-sm sm:text-[15px] font-light text-muted leading-[1.85] max-w-lg mb-8">
              {wedding.rsvpSection.message}
            </p>

            <p className="font-serif text-lg sm:text-xl text-ink mb-8">
              <span>{wedding.displayDate}</span>
              <span className="mx-3 text-taupe">&bull;</span>
              <span>{wedding.displayTime}</span>
              <span className="mx-3 text-taupe">&bull;</span>
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
                    className="mt-2 font-serif italic text-base sm:text-lg text-brown bg-ivory/90 border border-taupe/35 px-5 py-3 max-w-md"
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
