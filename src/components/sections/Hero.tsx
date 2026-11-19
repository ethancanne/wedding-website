import React from "react";
import { wedding } from "@/config/wedding";
import { Button } from "@/components/ui/Button";
import { WeddingPhoto } from "@/components/ui/WeddingPhoto";

export function Hero() {
  const rsvpHref = wedding.rsvpUrl.trim() ? wedding.rsvpUrl.trim() : "#rsvp";

  return (
    <section
      id="top"
      aria-label="Wedding Invitation Hero"
      className="relative w-full min-h-[100svh] flex flex-col items-center justify-end overflow-hidden bg-ivory"
    >
      {/* Full-Bleed Engagement Photograph */}
      <div className="absolute inset-0 w-full h-full">
        <WeddingPhoto
          src={wedding.images.hero.src}
          alt={wedding.images.hero.alt}
          fill
          priority
          quality={95}
          sizes="100vw"
          containerClassName="w-full h-full"
          className="object-cover object-[22%_14%] sm:object-[25%_16%] lg:object-[25%_18%] contrast-[1.07] saturate-[1.16] brightness-[0.98]"
        />

        {/* Dreamy radial edge vignette: completely clear across the couple in the center, softly feathered around outer edges */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 85% 76% at 45% 38%, rgba(250,245,236,0) 0%, rgba(250,245,236,0) 52%, rgba(250,245,236,0.12) 68%, rgba(250,245,236,0.32) 84%, rgba(250,245,236,0.62) 100%)",
          }}
        />

        {/* Ultra-smooth top sunlit fade so transparent navbar remains effortless to read without any harsh cutoff */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-32 sm:h-40"
          style={{
            background:
              "linear-gradient(to bottom, rgba(250,245,236,0.74) 0%, rgba(250,245,236,0.50) 25%, rgba(250,245,236,0.26) 52%, rgba(250,245,236,0.09) 76%, rgba(250,245,236,0.02) 90%, rgba(250,245,236,0) 100%)",
          }}
        />

        {/* Ultra-smooth multi-stop bottom warm ivory veil that feathers gradually with zero abrupt cutoff line */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[62%] sm:h-[58%] lg:h-[56%]"
          style={{
            background:
              "linear-gradient(to top, #FAF5EC 0%, rgba(250,245,236,0.98) 12%, rgba(250,245,236,0.92) 24%, rgba(250,245,236,0.80) 36%, rgba(250,245,236,0.62) 48%, rgba(250,245,236,0.42) 60%, rgba(250,245,236,0.23) 72%, rgba(250,245,236,0.10) 84%, rgba(250,245,236,0.03) 93%, rgba(250,245,236,0) 100%)",
          }}
        />
      </div>

      {/* Centered Invitation Lockup near the Bottom: Names, Date, and Buttons */}
      <div className="relative z-10 w-full flex flex-col items-center justify-end px-4 sm:px-8 pt-24 pb-7 sm:pb-10 lg:pb-11">
        <div className="relative flex flex-col items-center text-center px-2 py-2 sm:px-8 sm:py-3 max-w-4xl w-full">
          {/* Couple's Full Calligraphic Names (Horizontal Lockup matching Invitation) */}
          <h1 className="relative flex flex-row items-center justify-center gap-3 min-[375px]:gap-4 sm:gap-7 md:gap-9 w-full">
            <span className="flex flex-col items-center">
              <span className="font-script text-[40px] min-[375px]:text-[46px] sm:text-[64px] lg:text-[74px] xl:text-[82px] text-olive leading-[1.05] tracking-normal whitespace-nowrap pb-1 drop-shadow-[0_1px_8px_rgba(250,245,236,0.9)]">
                {wedding.couple.firstName}
              </span>
              <span className="font-serif italic font-semibold text-[15px] min-[375px]:text-[17px] sm:text-xl lg:text-2xl text-terracotta-dark tracking-[0.06em] -mt-1.5 sm:-mt-2 whitespace-nowrap drop-shadow-[0_1px_4px_rgba(250,245,236,0.95)]">
                {wedding.couple.firstLastName}
              </span>
            </span>

            {/* Center Ampersand & Decorative Terracotta Lines */}
            <span
              aria-hidden="true"
              className="flex items-center justify-center gap-2 sm:gap-3 shrink-0"
            >
              <span className="block h-[1.25px] w-4 min-[375px]:w-5 sm:w-7 lg:w-9 bg-terracotta-dark/80" />
              <span className="font-serif italic font-medium text-xl min-[375px]:text-2xl sm:text-3xl lg:text-[34px] text-terracotta-dark leading-none drop-shadow-[0_1px_4px_rgba(250,245,236,0.95)]">
                &amp;
              </span>
              <span className="block h-[1.25px] w-4 min-[375px]:w-5 sm:w-7 lg:w-9 bg-terracotta-dark/80" />
            </span>
            <span className="sr-only">and</span>

            <span className="flex flex-col items-center">
              <span className="font-script text-[40px] min-[375px]:text-[46px] sm:text-[64px] lg:text-[74px] xl:text-[82px] text-olive leading-[1.05] tracking-normal whitespace-nowrap pb-1 drop-shadow-[0_1px_8px_rgba(250,245,236,0.9)]">
                {wedding.couple.partnerName}
              </span>
              <span className="font-serif italic font-semibold text-[15px] min-[375px]:text-[17px] sm:text-xl lg:text-2xl text-terracotta-dark tracking-[0.06em] -mt-1 sm:-mt-1.5 -translate-x-2 sm:-translate-x-3 whitespace-nowrap drop-shadow-[0_1px_4px_rgba(250,245,236,0.95)]">
                {wedding.couple.partnerLastName}
              </span>
            </span>
          </h1>

          {/* Wedding Date */}
          <p className="relative mt-3.5 sm:mt-4 font-serif text-xl sm:text-2xl lg:text-[26px] font-semibold tracking-[0.08em] text-olive-dark">
            <time dateTime={wedding.date}>{wedding.displayDate}</time>
          </p>

          {/* Primary & Secondary Buttons */}
          <div className="relative mt-4 sm:mt-5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 w-full max-w-xs sm:max-w-md">
            <Button
              href={rsvpHref}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-w-[176px]"
            >
              RSVP
            </Button>
            <Button
              href="#schedule"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-w-[176px] bg-ivory/95 border-terracotta/75"
            >
              Wedding Details
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
