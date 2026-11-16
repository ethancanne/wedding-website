import React from "react";
import { wedding } from "@/config/wedding";
import { WeddingPhoto } from "@/components/ui/WeddingPhoto";

export function OurStory() {
  const [firstPhoto, secondPhoto, thirdPhoto, ...extraPhotos] =
    wedding.images.story;

  return (
    <section
      id="our-story"
      aria-labelledby="our-story-heading"
      className="relative w-full bg-ivory py-20 sm:py-28 lg:py-32 px-5 sm:px-8 lg:px-12 border-b border-taupe/25 scroll-mt-16 sm:scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <p className="text-[11px] uppercase tracking-[0.32em] text-subtle mb-3">
            {wedding.story.kicker}
          </p>
          <h2
            id="our-story-heading"
            className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal text-ink tracking-tight"
          >
            {wedding.story.heading}
          </h2>

          {/* Invitation-style hairline & ampersand divider */}
          <div
            aria-hidden="true"
            className="mt-5 mb-7 flex items-center justify-center gap-4 max-w-[200px] mx-auto"
          >
            <span className="h-px flex-1 bg-taupe/50" />
            <span className="font-serif italic text-xl text-taupe">&amp;</span>
            <span className="h-px flex-1 bg-taupe/50" />
          </div>

          {wedding.story.leadQuote && (
            <p className="font-serif italic text-xl sm:text-2xl text-muted leading-relaxed">
              &ldquo;{wedding.story.leadQuote}&rdquo;
            </p>
          )}
        </div>

        {/* Editorial Spread: Story Paragraphs + Supporting Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Editorial Text & Secondary Portrait */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="border-l border-taupe/40 pl-6 sm:pl-8 space-y-6">
              {wedding.story.paragraphs.map((paragraph, index) => (
                <div key={index} className="space-y-2">
                  <span
                    aria-hidden="true"
                    className="block font-serif italic text-sm text-brown tracking-widest"
                  >
                    0{index + 1}
                  </span>
                  <p className="text-sm sm:text-[15px] font-light text-muted leading-[1.85]">
                    {paragraph}
                  </p>
                </div>
              ))}
            </div>

            {/* Supporting Photo Under Text on Desktop / Stacked on Mobile */}
            {secondPhoto && (
              <figure className="mt-2 sm:mt-4 bg-cream/60 p-3 sm:p-4 border border-taupe/30">
                <WeddingPhoto
                  src={secondPhoto.src}
                  alt={secondPhoto.alt}
                  width={secondPhoto.width}
                  height={secondPhoto.height}
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  containerClassName="aspect-[3/2] w-full"
                  className="w-full h-full object-cover"
                />
              </figure>
            )}
          </div>

          {/* Right Column: Staggered Editorial Photography Pair */}
          <div className="lg:col-span-6 flex flex-col gap-8 lg:mt-4">
            {firstPhoto && (
              <figure className="bg-cream/60 p-3 sm:p-4 border border-taupe/30">
                <WeddingPhoto
                  src={firstPhoto.src}
                  alt={firstPhoto.alt}
                  width={firstPhoto.width}
                  height={firstPhoto.height}
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  containerClassName="aspect-[16/10] w-full"
                  className="w-full h-full object-cover"
                />
              </figure>
            )}

            {thirdPhoto && (
              <figure className="bg-cream/60 p-3 sm:p-4 border border-taupe/30 sm:w-11/12 sm:ml-auto">
                <WeddingPhoto
                  src={thirdPhoto.src}
                  alt={thirdPhoto.alt}
                  width={thirdPhoto.width}
                  height={thirdPhoto.height}
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  containerClassName="aspect-[3/2] w-full"
                  className="w-full h-full object-cover"
                />
              </figure>
            )}

            {/* Render any additional photos added to wedding.images.story */}
            {extraPhotos.map((photo) => (
              <figure
                key={photo.src}
                className="bg-cream/60 p-3 sm:p-4 border border-taupe/30"
              >
                <WeddingPhoto
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  containerClassName="aspect-[3/2] w-full"
                  className="w-full h-full object-cover"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
