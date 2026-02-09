"use client";

import { useRef, useEffect, useCallback } from "react";
import { Button } from "./ui/button";
import { safeTrackWithRetry, trackCustom } from "../lib/fbpixel";

const HeroSection = () => {
  const hasTrackedVSLPlay = useRef(false);

  const scrollToVideo = () => {
    const videoElement = document.getElementById("vsl-video");
    if (videoElement) {
      videoElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleVideoPlay = useCallback(() => {
    // Fire only once per page load
    if (hasTrackedVSLPlay.current) return;
    hasTrackedVSLPlay.current = true;

    safeTrackWithRetry(() => trackCustom("VSL_Play", { content_name: "VSL" }));
  }, []);

  // Listen for YouTube postMessage events
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && typeof event.data === "string") {
        try {
          const data = JSON.parse(event.data);
          // YouTube sends info=1 when video starts playing
          if (data.event === "onStateChange" && data.info === 1) {
            handleVideoPlay();
          }
        } catch {
          // Ignore parsing errors from other postMessage sources
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [handleVideoPlay]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-5 py-12 overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.youtube.com/embed/dHtqHf2F3Og?autoplay=1&mute=1&loop=1&playlist=dHtqHf2F3Og&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ transform: "scale(1.5)" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 glow-overlay opacity-50 animate-glow-pulse pointer-events-none z-10" />

      <div className="relative z-20 w-full max-w-2xl mx-auto text-center space-y-8">
        {/* Headline */}
        <div className="space-y-4">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground leading-tight uppercase">
            <span className="text-fire-ember">SABER COCINAR</span> CAMBIA LA
            FORMA EN QUE LAS PERSONAS TE PERCIBEN
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground uppercase tracking-wide">
            Esta receta es un primer paso para que eso empiece a notarse
          </p>
        </div>

        {/* Video Container */}
        <div
          id="vsl-video"
          className="relative w-full aspect-[9/16] sm:aspect-video max-w-6xl mx-auto rounded-xl overflow-hidden bg-card border border-border shadow-2xl"
        >
          {/* Neon blurred shiny background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 0,
                pointerEvents: "none",
                background:
                  "radial-gradient(circle at 60% 40%, #00fff7 0%, #ff00ea 40%, #fffb00 70%, transparent 100%)",
                filter: "blur(40px) brightness(1.2)",
                opacity: 0.7,
              }}
            />
            <div
              className="w-full h-full"
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 0,
                pointerEvents: "none",
                background:
                  "linear-gradient(135deg, rgba(0,255,247,0.2) 0%, rgba(255,0,234,0.15) 50%, rgba(255,251,0,0.1) 100%)",
                filter: "blur(20px)",
                opacity: 0.8,
              }}
            />
            <div
              className="w-full h-full"
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 0,
                pointerEvents: "none",
                background:
                  "radial-gradient(circle at 80% 80%, #fff 0%, transparent 70%)",
                filter: "blur(60px) brightness(1.5)",
                opacity: 0.5,
              }}
            />
          </div>
          {/* Video Placeholder - Replace with actual video embed */}
          <div className="absolute inset-0 flex items-center justify-center bg-charcoal-light z-10">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full fire-gradient flex items-center justify-center fire-glow cursor-pointer hover:scale-105 transition-transform">
                <svg
                  className="w-8 h-8 text-primary-foreground ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-sm text-muted-foreground">Video de la clase</p>
            </div>
          </div>

          <iframe
            src="https://www.youtube.com/embed/kFHjHoWAMzw?autoplay=1&mute=0&loop=1&playlist=kFHjHoWAMzw&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
            className="absolute inset-0 w-full h-full z-20"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={(e: React.SyntheticEvent<HTMLIFrameElement>) => {
              const iframe = e.target as HTMLIFrameElement;
              // Enable YouTube JS API to receive state change events
              iframe.contentWindow?.postMessage(
                '{"event":"command","func":"addEventListener","args":["onStateChange"]}',
                "*",
              );
            }}
          />
        </div>

        {/* CTA Button */}
      </div>

      {/* Gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 md:h-48 z-30 pointer-events-none bg-gradient-to-b from-transparent to-background" />
    </section>
  );
};

export default HeroSection;
