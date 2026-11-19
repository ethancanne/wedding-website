import React from "react";
import { wedding } from "@/config/wedding";
import {
  OliveLeafSprig,
  WatercolorBotanicalBranch,
  WatercolorSunflowerAccent,
} from "@/components/ui/BotanicalAccents";

export function Footer() {
  const rsvpHref = wedding.rsvpUrl.trim() ? wedding.rsvpUrl.trim() : "#rsvp";
  const isExternalRsvp =
    rsvpHref.startsWith("http://") || rsvpHref.startsWith("https://");

  return (
    <footer className="relative w-full stationery-cream text-ink py-16 sm:py-22 px-5 sm:px-8 border-t border-terracotta/25 overflow-hidden">
      {/* Subtle Watercolor Botanical Corner Accents */}
      <WatercolorBotanicalBranch className="hidden sm:block absolute -bottom-4 -left-4 w-36 h-44 opacity-45" />
      <WatercolorSunflowerAccent className="hidden sm:block absolute -bottom-4 -right-4 w-36 h-36 opacity-45" />

      <div className="relative z-10 mx-auto max-w-4xl flex flex-col items-center text-center">
        <OliveLeafSprig className="w-12 h-5 mb-2 opacity-85" />

        {/* Calligraphic Couple Names matching Invitation Typography & Colors */}
        <a
          href="#top"
          aria-label={`${wedding.couple.fullNames} — Return to top`}
          className="inline-flex items-center gap-3 sm:gap-5 group"
        >
          <span className="flex flex-col items-center">
            <span className="font-script text-4xl sm:text-5xl text-olive group-hover:text-olive-dark transition-colors leading-none">
              {wedding.couple.firstName}
            </span>
            <span className="font-serif italic text-sm sm:text-base text-terracotta tracking-[0.05em] -mt-0.5">
              {wedding.couple.firstLastName}
            </span>
          </span>

          <span className="flex items-center gap-2" aria-hidden="true">
            <span className="hidden sm:block h-px w-4 bg-terracotta/55" />
            <span className="font-serif italic text-xl sm:text-2xl text-terracotta">
              &amp;
            </span>
            <span className="hidden sm:block h-px w-4 bg-terracotta/55" />
          </span>

          <span className="flex flex-col items-center">
            <span className="font-script text-4xl sm:text-5xl text-olive group-hover:text-olive-dark transition-colors leading-[1.05] pb-0.5">
              {wedding.couple.partnerName}
            </span>
            <span className="font-serif italic text-sm sm:text-base text-terracotta tracking-[0.05em] -mt-1 -translate-x-1.5 sm:-translate-x-2">
              {wedding.couple.partnerLastName}
            </span>
          </span>
        </a>

        {/* Wedding Date & Address */}
        <p className="mt-4 text-xs uppercase tracking-[0.28em] text-olive-dark font-medium">
          {wedding.displayDate} <span className="text-terracotta mx-1">&bull;</span>{" "}
          {wedding.location.region}
        </p>

        {/* Decorative Hairline */}
        <div
          aria-hidden="true"
          className="my-6 h-px w-24 bg-terracotta/50"
        />

        {/* Thank-You Message */}
        <p className="font-serif italic text-lg sm:text-xl text-muted max-w-lg leading-relaxed">
          {wedding.footer.thankYouMessage}
        </p>

        {/* Simple Navigation Links */}
        <nav aria-label="Footer Navigation" className="mt-8">
          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            <li>
              <a
                href="#top"
                className="text-[11px] uppercase tracking-[0.24em] text-subtle hover:text-olive transition-colors"
              >
                Home
              </a>
            </li>
            {wedding.navigation.map((item) => (
              <li key={`footer-${item.href}`}>
                <a
                  href={item.href}
                  className="text-[11px] uppercase tracking-[0.24em] text-subtle hover:text-olive transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={rsvpHref}
                target={isExternalRsvp ? "_blank" : undefined}
                rel={isExternalRsvp ? "noopener noreferrer" : undefined}
                className="text-[11px] uppercase tracking-[0.24em] text-subtle hover:text-olive transition-colors"
              >
                RSVP
              </a>
            </li>
          </ul>
        </nav>

        <p className="mt-10 text-[10px] uppercase tracking-[0.22em] text-subtle">
          <span className="text-olive-dark font-medium">
            {wedding.couple.firstName}
          </span>{" "}
          <span className="text-terracotta-dark">
            {wedding.couple.firstLastName}
          </span>{" "}
          <span className="text-terracotta">&amp;</span>{" "}
          <span className="text-olive-dark font-medium">
            {wedding.couple.partnerName}
          </span>{" "}
          <span className="text-terracotta-dark">
            {wedding.couple.partnerLastName}
          </span>{" "}
          <span className="text-terracotta mx-1">&bull;</span>{" "}
          {wedding.location.address}
        </p>
      </div>
    </footer>
  );
}
