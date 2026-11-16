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
      className="relative w-full min-h-[100svh] flex flex-col items-center justify-end overflow-hidden bg-ivory border-b border-taupe/25"
    >
      {/* Full-Bleed Engagement Photograph */}
      <div className="absolute inset-0 w-full h-full">
        <WeddingPhoto
          src={wedding.images.hero.src}
          alt={wedding.images.hero.alt}
          fill
          priority
          quality={90}
          sizes="100vw"
          containerClassName="w-full h-full"
          className="object-cover object-[26%_16%] lg:object-[25%_18%]"
        />

        {/* Subtle luminous ivory wash to keep overall tone bright and airy */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-ivory/15"
        />

        {/* Soft top sunlit fade so transparent navbar remains effortless to read */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-32 sm:h-40 bg-gradient-to-b from-ivory/85 via-ivory/40 to-transparent"
        />

        {/* Soft bottom sunlit ivory veil rising cleanly beneath the couple's faces */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] sm:h-[44%] lg:h-[42%] bg-gradient-to-t from-ivory from-15% via-ivory/85 via-60% to-transparent"
        />
      </div>

      {/* Minimal Centered Overlay near the Bottom: Names, Date, and Buttons */}
      <div className="relative z-10 w-full flex flex-col items-center justify-end px-4 sm:px-8 pt-24 pb-8 sm:pb-10 lg:pb-12">
        <div className="relative flex flex-col items-center text-center px-1 py-2 sm:px-8 sm:py-3 max-w-4xl w-full">
          {/* Couple's Full Calligraphic Names (Horizontal Lockup) */}
          <h1 className="flex flex-row items-center justify-center gap-3 min-[375px]:gap-4 sm:gap-7 md:gap-9 w-full">
            <span className="flex flex-col items-center">
              <span className="font-script text-[36px] min-[375px]:text-[42px] sm:text-6xl lg:text-[68px] xl:text-[76px] text-ink leading-[0.95] tracking-normal whitespace-nowrap">
                {wedding.couple.firstName}
              </span>
              <span className="font-serif italic text-[15px] min-[375px]:text-[17px] sm:text-xl lg:text-2xl text-ink/90 tracking-[0.05em] -mt-0.5 whitespace-nowrap">
                {wedding.couple.firstLastName}
              </span>
            </span>

            {/* Center Ampersand Accent */}
            <span
              aria-hidden="true"
              className="flex items-center justify-center gap-2.5 sm:gap-3 shrink-0"
            >
              <span className="hidden sm:block h-px w-5 lg:w-7 bg-taupe/80" />
              <span className="font-serif italic text-xl min-[375px]:text-2xl sm:text-3xl lg:text-[34px] text-brown leading-none">
                &amp;
              </span>
              <span className="hidden sm:block h-px w-5 lg:w-7 bg-taupe/80" />
            </span>
            <span className="sr-only">and</span>

            <span className="flex flex-col items-center">
              <span className="font-script text-[36px] min-[375px]:text-[42px] sm:text-6xl lg:text-[68px] xl:text-[76px] text-ink leading-[0.95] tracking-normal whitespace-nowrap">
                {wedding.couple.partnerName}
              </span>
              <span className="font-serif italic text-[15px] min-[375px]:text-[17px] sm:text-xl lg:text-2xl text-ink/90 tracking-[0.05em] -mt-0.5 whitespace-nowrap">
                {wedding.couple.partnerLastName}
              </span>
            </span>
          </h1>

          {/* Wedding Date */}
          <p className="mt-4 sm:mt-5 font-serif text-xl sm:text-2xl lg:text-[26px] font-medium tracking-[0.08em] text-ink">
            <time dateTime={wedding.date}>{wedding.displayDate}</time>
          </p>

          {/* Primary & Secondary Buttons */}
          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-xs sm:max-w-md">
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
              className="w-full sm:w-auto min-w-[176px] bg-ivory/95 border-brown/60"
            >
              Wedding Details
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
