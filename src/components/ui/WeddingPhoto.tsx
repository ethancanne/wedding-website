"use client";

import React, { useState } from "react";
import Image from "next/image";
import { wedding } from "@/config/wedding";

interface WeddingPhotoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  className?: string;
  containerClassName?: string;
  objectPosition?: string;
  draggable?: boolean;
}

export function WeddingPhoto({
  src,
  alt,
  width = 1600,
  height = 1067,
  fill = false,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 800px",
  quality = 85,
  className = "",
  containerClassName = "",
  objectPosition,
  draggable = false,
}: WeddingPhotoProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative flex flex-col items-center justify-center bg-cream border border-taupe/35 p-6 text-center overflow-hidden ${containerClassName}`}
      >
        <div className="border border-taupe/30 px-6 py-8 w-full h-full flex flex-col items-center justify-center gap-3">
          <span className="font-script text-3xl text-brown/80">
            {wedding.couple.monogram}
          </span>
          <div className="w-10 h-px bg-taupe/50" aria-hidden="true" />
          <p className="text-[11px] uppercase tracking-[0.22em] text-subtle max-w-xs leading-relaxed">
            {alt}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden bg-cream ${containerClassName}`}
    >
      {/* Subtle stationery shimmer while loading */}
      {!isLoaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-cream via-ivory to-taupe/15 animate-pulse"
        />
      )}

      <Image
        src={src}
        alt={alt}
        {...(fill ? { fill: true } : { width, height })}
        {...(priority ? { preload: true } : { loading: "lazy" })}
        sizes={sizes}
        quality={quality}
        draggable={draggable}
        style={objectPosition ? { objectPosition } : undefined}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`transition-opacity duration-700 ease-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${className}`}
      />
    </div>
  );
}
