import React from "react";

interface AccentProps {
  className?: string;
}

/**
 * Delicate olive-green leafy sprig modeled directly after the botanical ornament
 * beneath "SAVE THE DATE" on the front of the wedding invitation.
 */
export function OliveLeafSprig({ className = "w-14 h-6" }: AccentProps) {
  return (
    <svg
      viewBox="0 0 120 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      <path
        d="M16 33C38 28 66 20 104 26"
        stroke="#5E6846"
        strokeWidth="1.35"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M35 28C28 21 26 13 33 9C39 13 41 21 35 28Z"
        fill="#6B7042"
        opacity="0.78"
      />
      <path
        d="M54 23C49 14 51 6 59 4C63 10 61 18 54 23Z"
        fill="#5E6846"
        opacity="0.85"
      />
      <path
        d="M74 22C75 13 81 7 90 8C88 15 82 21 74 22Z"
        fill="#7E865B"
        opacity="0.8"
      />
      <path
        d="M90 24C96 18 104 16 112 19C106 24 98 26 90 24Z"
        fill="#6B7042"
        opacity="0.72"
      />
      <path
        d="M46 25C41 32 33 37 24 36C30 30 38 26 46 25Z"
        fill="#848C64"
        opacity="0.75"
      />
      <path
        d="M68 22C66 30 60 37 51 38C54 30 61 24 68 22Z"
        fill="#6B7042"
        opacity="0.82"
      />
      <path
        d="M84 23C87 30 93 35 101 35C97 29 91 25 84 23Z"
        fill="#848C64"
        opacity="0.7"
      />
    </svg>
  );
}

/**
 * Invitation-style soft terracotta hairline and italic ampersand divider
 * replicating the "——— & ———" motif between the couple's names on the invitation.
 */
export function InvitationAmpersandDivider({
  className = "mt-5 mb-7",
}: AccentProps) {
  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center gap-4 max-w-[210px] mx-auto ${className}`}
    >
      <span className="h-px flex-1 bg-terracotta/55" />
      <span className="font-serif italic text-xl text-terracotta select-none">
        &amp;
      </span>
      <span className="h-px flex-1 bg-terracotta/55" />
    </div>
  );
}

/**
 * Hand-painted watercolor botanical arrangement combining peachy-terracotta
 * blossoms, golden buds, and olive-sage leaves from the invitation stationery suite.
 */
export function WatercolorBotanicalBranch({
  className = "w-36 h-44",
}: AccentProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      <div className="relative w-full h-full">
        {/* Olive leaf branch base */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/botanicals/olive-leaf-branch.png"
          alt=""
          width={138}
          height={242}
          loading="lazy"
          decoding="async"
          className="absolute bottom-0 left-1 w-[56%] h-auto object-contain -rotate-12 opacity-85"
        />
        {/* Golden bud sprig */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/botanicals/golden-bud-sprig.png"
          alt=""
          width={130}
          height={284}
          loading="lazy"
          decoding="async"
          className="absolute bottom-1 left-9 w-[54%] h-auto object-contain rotate-[22deg] opacity-85"
        />
        {/* Delicate peach blossom branch */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/botanicals/peach-blossom-branch.png"
          alt=""
          width={181}
          height={303}
          loading="lazy"
          decoding="async"
          className="absolute bottom-0 left-3 w-[68%] h-auto object-contain rotate-[6deg]"
        />
      </div>
    </div>
  );
}

/**
 * Hand-painted watercolor sunflower, peachy-terracotta blossom, and olive foliage
 * cluster directly from the wedding invitation clipart collection.
 */
export function WatercolorSunflowerAccent({
  className = "w-36 h-36",
}: AccentProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      <div className="relative w-full h-full">
        {/* Tall peach blossom sprig behind sunflower */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/botanicals/peach-blossom-sprig.png"
          alt=""
          width={161}
          height={412}
          loading="lazy"
          decoding="async"
          className="absolute -top-2 right-7 w-[48%] h-auto object-contain -rotate-[24deg] opacity-85"
        />
        {/* Warm terracotta 5-petal blossom */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/botanicals/terracotta-flower.png"
          alt=""
          width={206}
          height={292}
          loading="lazy"
          decoding="async"
          className="absolute bottom-1 right-12 w-[52%] h-auto object-contain -rotate-[32deg] opacity-85"
        />
        {/* Main watercolor golden sunflower */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/botanicals/sunflower-bloom.png"
          alt=""
          width={281}
          height={338}
          loading="lazy"
          decoding="async"
          className="absolute bottom-0 right-0 w-[72%] h-auto object-contain -rotate-[12deg]"
        />
      </div>
    </div>
  );
}

/**
 * Subtle organic deckled/torn parchment paper edge transition inspired by the
 * right-hand torn parchment border on the front of the wedding invitation.
 */
export function DeckledParchmentEdge({
  fill = "#FAF5EC",
  className = "",
}: {
  fill?: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none w-full overflow-hidden leading-none select-none ${className}`}
    >
      <svg
        viewBox="0 0 1440 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-3.5 sm:h-5 block"
      >
        {/* Subtle parchment shadow lip */}
        <path
          d="M0 14C60 19 115 9 180 13C245 17 310 8 375 14C440 20 505 11 575 15C645 19 710 7 780 13C850 19 915 10 985 15C1055 20 1120 9 1190 14C1260 19 1345 10 1440 15V28H0V14Z"
          fill="#DFC9AE"
          opacity="0.45"
        />
        {/* Main deckled paper edge */}
        <path
          d="M0 18C65 23 120 12 185 17C250 22 315 11 380 17C445 23 510 14 580 18C650 22 715 11 785 17C855 23 920 13 990 18C1060 23 1125 13 1195 17C1265 21 1350 13 1440 18V28H0V18Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
