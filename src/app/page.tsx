import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Countdown } from "@/components/sections/Countdown";
import { OurStory } from "@/components/sections/OurStory";
import { WeddingSchedule } from "@/components/sections/WeddingSchedule";
import { Location } from "@/components/sections/Location";
import { Gallery } from "@/components/sections/Gallery";
import { RSVP } from "@/components/sections/RSVP";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory text-ink">
      <Navbar />
      <main id="main-content" className="flex-1 overflow-x-clip">
        <Hero />
        <Countdown />
        <OurStory />
        <WeddingSchedule />
        <Location />
        <Gallery />
        <RSVP />
      </main>
      <Footer />
    </div>
  );
}
