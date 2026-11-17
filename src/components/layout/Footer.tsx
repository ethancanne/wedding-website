import React from "react";
import { wedding } from "@/config/wedding";

export function Footer() {
  const rsvpHref = wedding.rsvpUrl.trim() ? wedding.rsvpUrl.trim() : "#rsvp";
  const isExternalRsvp =
    rsvpHref.startsWith("http://") || rsvpHref.startsWith("https://");

  return (
    <footer className="w-full bg-cream text-ink py-16 sm:py-20 px-5 sm:px-8 border-t border-taupe/25">
      <div className="mx-auto max-w-4xl flex flex-col items-center text-center">
        {/* Calligraphic Couple Names */}
        <a
          href="#top"
          aria-label={`${wedding.couple.fullNames} — Return to top`}
          className="inline-flex items-baseline gap-2.5 group"
        >
          <span className="font-script text-4xl sm:text-5xl text-ink group-hover:text-brown transition-colors">
            {wedding.couple.firstName}
          </span>
          <span className="font-serif italic text-xl sm:text-2xl text-taupe">
            &amp;
          </span>
          <span className="font-script text-4xl sm:text-5xl text-ink group-hover:text-brown transition-colors">
            {wedding.couple.partnerName}
          </span>
        </a>

        {/* Wedding Date & Address */}
        <p className="mt-3 text-xs uppercase tracking-[0.28em] text-muted">
          {wedding.displayDate} &bull; {wedding.location.region}
        </p>

        {/* Decorative Hairline */}
        <div
          aria-hidden="true"
          className="my-7 h-px w-24 bg-taupe/50"
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
                className="text-[11px] uppercase tracking-[0.24em] text-subtle hover:text-brown transition-colors"
              >
                Home
              </a>
            </li>
            {wedding.navigation.map((item) => (
              <li key={`footer-${item.href}`}>
                <a
                  href={item.href}
                  className="text-[11px] uppercase tracking-[0.24em] text-subtle hover:text-brown transition-colors"
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
                className="text-[11px] uppercase tracking-[0.24em] text-subtle hover:text-brown transition-colors"
              >
                RSVP
              </a>
            </li>
          </ul>
        </nav>

        <p className="mt-10 text-[10px] uppercase tracking-[0.22em] text-subtle/80">
          {wedding.couple.firstName} {wedding.couple.firstLastName} &amp;{" "}
          {wedding.couple.partnerName} {wedding.couple.partnerLastName} &bull;{" "}
          {wedding.location.address}
        </p>
      </div>
    </footer>
  );
}
