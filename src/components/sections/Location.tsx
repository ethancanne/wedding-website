"use client";

import React, { useState } from "react";
import { wedding } from "@/config/wedding";
import { Button } from "@/components/ui/Button";
import { WeddingPhoto } from "@/components/ui/WeddingPhoto";

export function Location() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(wedding.location.address);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is unavailable
      setCopied(false);
    }
  };

  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="relative w-full bg-ivory py-20 sm:py-28 lg:py-32 px-5 sm:px-8 lg:px-12 border-b border-taupe/25 scroll-mt-16 sm:scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <p className="text-[11px] uppercase tracking-[0.32em] text-subtle mb-3">
            {wedding.location.kicker}
          </p>
          <h2
            id="location-heading"
            className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal text-ink tracking-tight"
          >
            {wedding.location.heading}
          </h2>

          {/* Hairline & Ampersand Divider */}
          <div
            aria-hidden="true"
            className="mt-5 flex items-center justify-center gap-4 max-w-[200px] mx-auto"
          >
            <span className="h-px flex-1 bg-taupe/50" />
            <span className="font-serif italic text-xl text-taupe">&amp;</span>
            <span className="h-px flex-1 bg-taupe/50" />
          </div>
        </div>

        {/* Main Location Grid: Always-Visible Map + Supporting Photography + Stationery Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left: Embedded Interactive Map & Supporting Photography */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
            {/* Always-Visible Map Frame */}
            <div className="bg-cream p-3 sm:p-4 border border-taupe/30">
              {wedding.location.embedMapUrl ? (
                <div className="relative aspect-[16/10] w-full bg-ivory/70 overflow-hidden">
                  {/* Subtle stationery fallback shown while map tiles load or if embed is blocked */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
                  >
                    <span className="text-[10px] uppercase tracking-[0.26em] text-subtle mb-1.5">
                      Interactive Map
                    </span>
                    <p className="font-serif italic text-lg text-muted">
                      {wedding.location.address}
                    </p>
                  </div>
                  <iframe
                    title={`Map showing ${wedding.location.address}`}
                    src={wedding.location.embedMapUrl}
                    className="relative z-10 w-full h-full border-0 grayscale-[35%] contrast-[95%]"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              ) : (
                <WeddingPhoto
                  src={wedding.images.location.primary.src}
                  alt={wedding.images.location.primary.alt}
                  width={wedding.images.location.primary.width}
                  height={wedding.images.location.primary.height}
                  sizes="(max-width: 1024px) 100vw, 56vw"
                  containerClassName="aspect-[16/10] w-full"
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Supporting Venue & Surroundings Photography Diptych */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-cream p-2 sm:p-3 border border-taupe/30">
                <WeddingPhoto
                  src={wedding.images.location.primary.src}
                  alt={wedding.images.location.primary.alt}
                  width={wedding.images.location.primary.width}
                  height={wedding.images.location.primary.height}
                  sizes="(max-width: 1024px) 50vw, 28vw"
                  containerClassName="aspect-[16/10] w-full"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-cream p-2 sm:p-3 border border-taupe/30">
                <WeddingPhoto
                  src={wedding.images.location.secondary.src}
                  alt={wedding.images.location.secondary.alt}
                  width={wedding.images.location.secondary.width}
                  height={wedding.images.location.secondary.height}
                  sizes="(max-width: 1024px) 50vw, 28vw"
                  containerClassName="aspect-[16/10] w-full"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Stationery Venue & Address Details */}
          <div className="lg:col-span-5 bg-cream/65 border border-taupe/35 p-8 sm:p-10 md:p-12 text-center lg:text-left flex flex-col justify-center">
            <p className="text-[11px] uppercase tracking-[0.28em] text-subtle mb-2">
              Ceremony &amp; Reception
            </p>

            {wedding.location.venueName ? (
              <h3 className="font-serif text-3xl sm:text-4xl text-ink font-normal mb-2">
                {wedding.location.venueName}
              </h3>
            ) : (
              <h3 className="font-serif text-3xl sm:text-4xl text-ink font-normal mb-2">
                {wedding.location.region}
              </h3>
            )}

            <div
              className="w-12 h-px bg-taupe/50 my-5 mx-auto lg:mx-0"
              aria-hidden="true"
            />

            {/* Full Address Block */}
            <address className="not-italic space-y-1 mb-6">
              <p className="font-serif text-2xl sm:text-[26px] text-ink">
                {wedding.location.street}
              </p>
              <p className="text-xs sm:text-sm uppercase tracking-[0.24em] text-muted">
                {wedding.location.cityStateZip}
              </p>
            </address>

            <p className="text-sm sm:text-[15px] font-light text-muted leading-[1.85] mb-8">
              {wedding.location.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5">
              <Button
                href={wedding.location.mapsUrl}
                external
                variant="primary"
                size="lg"
                className="w-full"
              >
                Get Directions
              </Button>

              <Button
                onClick={handleCopyAddress}
                variant="outline"
                size="md"
                className="w-full"
                aria-live="polite"
              >
                {copied ? "Address Copied" : "Copy Address"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
