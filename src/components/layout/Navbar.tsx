"use client";

import React, { useEffect, useState } from "react";
import { wedding } from "@/config/wedding";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Track sticky header state and active section deterministically across short and tall sections
  useEffect(() => {
    const sectionIds = ["our-story", "schedule", "location", "gallery", "rsvp"];
    let frameId: number | null = null;

    const updateNavState = () => {
      frameId = null;
      const y = window.scrollY;
      const scrolled = y > 24;
      setIsScrolled(scrolled);

      if (!scrolled) {
        setActiveSection("");
        return;
      }

      const elements = sectionIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);

      if (elements.length === 0) return;

      const docHeight = document.documentElement.scrollHeight;
      if (window.innerHeight + y >= docHeight - 24) {
        setActiveSection(`#${elements[elements.length - 1].id}`);
        return;
      }

      const headerHeight = window.innerWidth >= 640 ? 80 : 64;
      const triggerY = Math.max(
        headerHeight + 48,
        Math.round(window.innerHeight * 0.35)
      );

      let current = "";
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= triggerY) {
          current = `#${el.id}`;
        }
      }

      setActiveSection(current);
    };

    const scheduleUpdate = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(updateNavState);
    };

    updateNavState();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  // Close mobile menu on Escape or viewport resize to desktop
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenuOpen]);

  const rsvpTarget = wedding.rsvpUrl.trim() ? wedding.rsvpUrl.trim() : "#rsvp";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "bg-ivory/95 backdrop-blur-md border-b border-terracotta/25 shadow-[0_2px_20px_rgba(107,112,66,0.06)]"
          : "bg-transparent border-b border-transparent shadow-none"
      }`}
    >
      <nav
        aria-label="Primary Navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12 h-16 sm:h-20"
      >
        {/* Couple Names / Brand Logo */}
        <a
          href="#top"
          onClick={() => {
            setActiveSection("");
            setMobileMenuOpen(false);
          }}
          className="group inline-flex shrink-0 whitespace-nowrap items-baseline gap-2 py-1 focus:outline-none"
          aria-label={`${wedding.couple.fullNames} — Return to top`}
        >
          <span className="font-script text-2xl sm:text-[28px] text-olive tracking-wide transition-colors group-hover:text-olive-dark">
            {wedding.couple.firstName}
          </span>
          <span className="font-serif italic text-base sm:text-lg text-terracotta">
            &amp;
          </span>
          <span className="font-script text-2xl sm:text-[28px] text-olive tracking-wide transition-colors group-hover:text-olive-dark">
            {wedding.couple.partnerName}
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center md:gap-5 lg:gap-10">
          <ul className="flex items-center md:gap-5 lg:gap-9">
            {wedding.navigation.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <li key={item.href} className="shrink-0">
                  <a
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative whitespace-nowrap py-2 text-[11px] uppercase md:tracking-[0.18em] lg:tracking-[0.25em] transition-colors duration-200 ${
                      isActive
                        ? "text-olive-dark font-medium"
                        : "text-ink/85 hover:text-olive"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 right-0 -bottom-0.5 h-[1.5px] bg-terracotta transition-transform duration-300 origin-center ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="h-4 w-px bg-terracotta/40 shrink-0" aria-hidden="true" />

          <Button
            href={rsvpTarget}
            variant={activeSection === "#rsvp" ? "primary" : "outline"}
            size="sm"
            className={
              isScrolled || mobileMenuOpen
                ? "shrink-0"
                : "shrink-0 bg-ivory/90 border-terracotta/70"
            }
          >
            RSVP
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-menu"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 text-olive-dark hover:text-olive transition-colors cursor-pointer"
        >
          <span className="sr-only">
            {mobileMenuOpen ? "Close menu" : "Open menu"}
          </span>
          <div className="relative w-5 h-3.5 flex flex-col justify-between">
            <span
              className={`block h-[1.25px] w-full bg-current transition-all duration-300 origin-center ${
                mobileMenuOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.25px] w-full bg-current transition-opacity duration-200 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[1.25px] w-full bg-current transition-all duration-300 origin-center ${
                mobileMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Dropdown Panel */}
      <div
        id="mobile-navigation-menu"
        aria-hidden={!mobileMenuOpen}
        className={`md:hidden absolute top-full left-0 right-0 z-50 overflow-hidden transition-all duration-300 ease-in-out bg-ivory/98 backdrop-blur-md border-b border-terracotta/30 shadow-[0_12px_30px_rgba(46,48,35,0.08)] ${
          mobileMenuOpen
            ? "max-h-[420px] opacity-100 visible"
            : "max-h-0 opacity-0 invisible border-b-0 pointer-events-none"
        }`}
      >
        <div className="px-6 pt-3 pb-7 flex flex-col items-center text-center">
          <div className="w-12 h-px bg-terracotta/45 mb-4" aria-hidden="true" />
          <ul className="w-full flex flex-col gap-1">
            {wedding.navigation.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <li key={item.href} className="w-full">
                  <a
                    href={item.href}
                    tabIndex={mobileMenuOpen ? 0 : -1}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block w-full py-3.5 text-xs uppercase tracking-[0.26em] transition-colors ${
                      isActive
                        ? "text-olive-dark font-medium"
                        : "text-ink/85 hover:text-olive"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="w-full pt-4 mt-2 border-t border-terracotta/25 flex flex-col items-center gap-3">
            <Button
              href={rsvpTarget}
              variant="primary"
              size="md"
              tabIndex={mobileMenuOpen ? 0 : -1}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full max-w-xs"
            >
              RSVP
            </Button>
            <p className="text-[10px] uppercase tracking-[0.22em] text-terracotta-dark">
              {wedding.displayDate} &bull; {wedding.location.region}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
