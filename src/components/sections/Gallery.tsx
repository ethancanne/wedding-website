"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { wedding } from "@/config/wedding";
import { WeddingPhoto } from "@/components/ui/WeddingPhoto";

export function Gallery() {
  const photos = wedding.images.gallery;
  const total = photos.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const activeIndexRef = useRef(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);
  const thumbTrackRef = useRef<HTMLDivElement | null>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const isProgrammaticScroll = useRef(false);
  const programmaticTimer = useRef<number | null>(null);

  // Mouse drag state
  const dragState = useRef({
    isDown: false,
    startX: 0,
    lastDeltaX: 0,
    startScrollLeft: 0,
    moved: false,
  });

  // Scroll main track to a specific slide index without scrolling the vertical page
  const scrollToSlide = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      if (total === 0) return;
      const boundedIndex = ((index % total) + total) % total;
      const track = trackRef.current;
      const slide = slideRefs.current[boundedIndex];

      isProgrammaticScroll.current = true;
      if (programmaticTimer.current !== null) {
        window.clearTimeout(programmaticTimer.current);
      }
      programmaticTimer.current = window.setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 650);

      activeIndexRef.current = boundedIndex;
      setActiveIndex(boundedIndex);

      if (track && slide) {
        const targetLeft =
          slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2;
        track.scrollTo({
          left: Math.max(0, targetLeft),
          behavior,
        });
      }
    },
    [total]
  );

  useEffect(() => {
    return () => {
      if (programmaticTimer.current !== null) {
        window.clearTimeout(programmaticTimer.current);
      }
    };
  }, []);

  // Keep active thumbnail centered horizontally inside the thumbnail strip
  useEffect(() => {
    const thumbTrack = thumbTrackRef.current;
    const activeThumb = thumbRefs.current[activeIndex];
    if (!thumbTrack || !activeThumb) return;

    const targetLeft =
      activeThumb.offsetLeft -
      (thumbTrack.clientWidth - activeThumb.clientWidth) / 2;

    thumbTrack.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: "smooth",
    });
  }, [activeIndex]);

  // Update activeIndex on user scroll based on which slide is closest to the track center
  const handleTrackScroll = useCallback(() => {
    const track = trackRef.current;
    if (
      !track ||
      dragState.current.isDown ||
      isProgrammaticScroll.current
    ) {
      return;
    }

    if (track.scrollLeft <= 12) {
      activeIndexRef.current = 0;
      setActiveIndex(0);
      return;
    }

    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll > 0 && track.scrollLeft >= maxScroll - 12) {
      activeIndexRef.current = total - 1;
      setActiveIndex(total - 1);
      return;
    }

    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    let closestIdx = 0;
    let minDistance = Number.POSITIVE_INFINITY;

    slideRefs.current.forEach((slide, idx) => {
      if (!slide) return;
      const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
      const distance = Math.abs(trackCenter - slideCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = idx;
      }
    });

    activeIndexRef.current = closestIdx;
    setActiveIndex(closestIdx);
  }, [total]);

  // Desktop mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || e.button !== 0) return;

    if (programmaticTimer.current !== null) {
      window.clearTimeout(programmaticTimer.current);
      isProgrammaticScroll.current = false;
    }

    dragState.current = {
      isDown: true,
      startX: e.clientX,
      lastDeltaX: 0,
      startScrollLeft: track.scrollLeft,
      moved: false,
    };
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !dragState.current.isDown) return;

    e.preventDefault();
    const delta = e.clientX - dragState.current.startX;
    dragState.current.lastDeltaX = delta;
    if (Math.abs(delta) > 6) {
      dragState.current.moved = true;
    }
    track.scrollLeft = dragState.current.startScrollLeft - delta * 1.15;
  };

  const finishMouseDrag = useCallback(() => {
    if (!dragState.current.isDown) return;
    const { moved, lastDeltaX } = dragState.current;
    dragState.current.isDown = false;
    setIsDragging(false);

    if (!moved) return;

    const currentIdx = activeIndexRef.current;
    if (lastDeltaX < -40) {
      scrollToSlide(currentIdx + 1, "smooth");
    } else if (lastDeltaX > 40) {
      scrollToSlide(currentIdx - 1, "smooth");
    } else {
      scrollToSlide(currentIdx, "smooth");
    }

    window.setTimeout(() => {
      dragState.current.moved = false;
    }, 80);
  }, [scrollToSlide]);

  // Keyboard navigation when gallery is focused
  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollToSlide(activeIndexRef.current - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollToSlide(activeIndexRef.current + 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      scrollToSlide(0);
    } else if (e.key === "End") {
      e.preventDefault();
      scrollToSlide(total - 1);
    }
  };

  if (total === 0) {
    return null;
  }

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      aria-roledescription="carousel"
      onKeyDown={handleKeyDown}
      className="relative w-full bg-cream py-20 sm:py-28 lg:py-32 border-b border-taupe/25 scroll-mt-16 sm:scroll-mt-20 overflow-hidden"
    >
      {/* Section Header */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="text-center md:text-left">
            <p className="text-[11px] uppercase tracking-[0.32em] text-subtle mb-3">
              {wedding.gallerySection.kicker}
            </p>
            <h2
              id="gallery-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal text-ink tracking-tight"
            >
              {wedding.gallerySection.heading}
            </h2>
            <p className="mt-3 font-serif italic text-lg sm:text-xl text-muted max-w-xl">
              {wedding.gallerySection.subtitle}
            </p>
          </div>

          {/* Desktop & Mobile Counter + Prev/Next Controls */}
          <div className="flex items-center justify-center md:justify-end gap-5">
            <div
              aria-live="polite"
              aria-atomic="true"
              className="font-serif text-lg sm:text-xl text-ink tabular-nums tracking-widest"
            >
              <span>{String(activeIndex + 1).padStart(2, "0")}</span>
              <span className="mx-2 text-taupe">/</span>
              <span className="text-subtle">
                {String(total).padStart(2, "0")}
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => scrollToSlide(activeIndexRef.current - 1)}
                aria-label="Previous photograph"
                className="inline-flex h-11 w-11 items-center justify-center border border-taupe/60 bg-ivory text-ink hover:border-brown hover:bg-brown hover:text-ivory transition-colors duration-200 cursor-pointer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path
                    d="M15 18l-6-6 6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => scrollToSlide(activeIndexRef.current + 1)}
                aria-label="Next photograph"
                className="inline-flex h-11 w-11 items-center justify-center border border-taupe/60 bg-ivory text-ink hover:border-brown hover:bg-brown hover:text-ivory transition-colors duration-200 cursor-pointer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path
                    d="M9 18l6-6-6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Swipe & Drag Filmstrip Track */}
      <div className="relative w-full">
        <div
          ref={trackRef}
          role="region"
          aria-label="Engagement photographs horizontal gallery"
          tabIndex={0}
          onScroll={handleTrackScroll}
          onDragStart={(e) => e.preventDefault()}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={finishMouseDrag}
          onMouseLeave={finishMouseDrag}
          className={`flex items-center gap-5 sm:gap-7 overflow-x-auto no-scrollbar px-5 sm:px-12 lg:px-[max(3rem,calc((100vw-72rem)/2+3rem))] py-2 select-none ${
            isDragging
              ? "cursor-grabbing snap-none"
              : "cursor-grab snap-x snap-mandatory"
          }`}
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {photos.map((photo, index) => {
            const isPortrait = photo.height > photo.width;
            const isActive = index === activeIndex;

            return (
              <figure
                key={photo.src}
                ref={(el) => {
                  slideRefs.current[index] = el;
                }}
                role="group"
                aria-roledescription="slide"
                aria-label={`Photograph ${index + 1} of ${total}: ${photo.alt}`}
                onClick={() => {
                  if (!dragState.current.moved && index !== activeIndexRef.current) {
                    scrollToSlide(index);
                  }
                }}
                className={`snap-center shrink-0 bg-ivory p-2.5 sm:p-4 border transition-all duration-500 ${
                  isActive
                    ? "border-brown/60 shadow-[0_12px_36px_rgba(112,83,63,0.08)] opacity-100 scale-100"
                    : "border-taupe/30 opacity-75 hover:opacity-95 scale-[0.98]"
                } ${
                  isPortrait
                    ? "w-[74vw] max-w-[310px] sm:w-[320px] md:w-[350px] lg:w-[380px]"
                    : "w-[86vw] max-w-[560px] sm:w-[540px] md:w-[640px] lg:w-[740px]"
                }`}
              >
                <WeddingPhoto
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  priority={false}
                  sizes={
                    isPortrait
                      ? "(max-width: 640px) 75vw, 380px"
                      : "(max-width: 640px) 86vw, (max-width: 1024px) 640px, 740px"
                  }
                  containerClassName="h-[340px] sm:h-[420px] md:h-[470px] lg:h-[520px] w-full"
                  className="w-full h-full object-cover"
                />
              </figure>
            );
          })}
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12 mt-7 sm:mt-9">
        {/* Thumbnail Navigation Strip */}
        <div
          ref={thumbTrackRef}
          role="tablist"
          aria-label="Choose a photograph"
          className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto no-scrollbar py-2 px-1"
        >
          {photos.map((photo, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={`thumb-${photo.src}`}
                ref={(el) => {
                  thumbRefs.current[idx] = el;
                }}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-label={`View photograph ${idx + 1}: ${photo.alt}`}
                onClick={() => scrollToSlide(idx)}
                className={`relative shrink-0 w-16 h-12 sm:w-20 sm:h-14 overflow-hidden border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "border-brown ring-2 ring-brown/30 opacity-100 scale-105"
                    : "border-taupe/35 opacity-55 hover:opacity-90"
                }`}
              >
                <WeddingPhoto
                  src={photo.src}
                  alt={photo.alt}
                  width={160}
                  height={120}
                  quality={60}
                  sizes="80px"
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
