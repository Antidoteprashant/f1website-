"use client";

import { useRef, useEffect } from "react";
import { useScroll } from "framer-motion";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import ZondaScrollCanvas from "@/components/ZondaScrollCanvas";
import ZondaExperience from "@/components/ZondaExperience";
import SpecsGrid from "@/components/SpecsGrid";
import F1CarViewer from "@/components/F1CarViewer";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const TOTAL_FRAMES = 181; // ezgif-frame-001.png to ezgif-frame-181.png
  const IMAGE_FOLDER_PATH = "/images/rb19-f1-sequence";

  return (
    <main className="bg-[var(--color-pagani-black)]">
      <Navbar />

      {/* Scroll Container - 500vh for smooth scroll */}
      <section ref={containerRef} className="h-[500vh] relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Background Canvas (z-0) */}
          <ZondaScrollCanvas
            scrollYProgress={scrollYProgress}
            totalFrames={TOTAL_FRAMES}
            imageFolderPath={IMAGE_FOLDER_PATH}
          />

          {/* HUD Overlay (z-10) */}
          <ZondaExperience scrollYProgress={scrollYProgress} />
        </div>
      </section>

      {/* Additional Content Below Scroll Section (z-20) */}
      <div className="relative z-20 bg-[var(--color-pagani-black)]">
        <SpecsGrid />
        <F1CarViewer />
        <Features />
        <Footer />
      </div>
    </main>
  );
}
