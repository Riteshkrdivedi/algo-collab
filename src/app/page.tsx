"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GradientBackground from "./home-components/GradientBackground";
import HeroSection from "./home-components/HeroSection";
import FeatureGrid from "./home-components/FeatureGrid";
import LiveStrip from "./home-components/LiveStrip";
import LeaderboardPreview from "./home-components/LeaderboardPreview";
import CallToAction from "./home-components/CallToAction";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <GradientBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <FeatureGrid />
        <LiveStrip />
        <LeaderboardPreview />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
