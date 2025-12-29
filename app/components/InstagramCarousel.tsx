"use client";

import { useState, useEffect, useRef } from "react";

const INSTAGRAM_POSTS = [
  {
    id: "DSBBTHiDUq_",
    url: "https://www.instagram.com/p/DSBBTHiDUq_/",
    type: "video",
  },
  {
    id: "DLsD7M5T_jY",
    url: "https://www.instagram.com/p/DLsD7M5T_jY/",
    type: "image",
  },
  {
    id: "DLDdTehzJym",
    url: "https://www.instagram.com/p/DLDdTehzJym/",
    type: "image",
  },
  {
    id: "DQDfnukgiFp",
    url: "https://www.instagram.com/p/DQDfnukgiFp/",
    type: "video",
  },
];

export default function InstagramCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRefs = useRef<(HTMLIFrameElement | null)[]>([]);

  // Handle carousel navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % INSTAGRAM_POSTS.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + INSTAGRAM_POSTS.length) % INSTAGRAM_POSTS.length
    );
  };

  // Auto-play carousel
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, currentSlide]);

  // Play/Pause video when it becomes active/inactive
  useEffect(() => {
    if (INSTAGRAM_POSTS[currentSlide].type === "video") {
      const iframe = iframeRefs.current[currentSlide];
      if (iframe) {
        // Instagram iframes auto-play when in view
        // You might need additional logic if you want manual control
      }
    }
  }, [currentSlide]);

  return (
    <section className="py-16 px-5 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <div className="text-center md:text-left">
            <p className="text-fire-ember text-sm font-medium uppercase tracking-wider mb-2">
              SÍGUENOS
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground uppercase">
              Nuestro Instagram
            </h2>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {INSTAGRAM_POSTS.map((post, index) => (
              <div
                key={post.id}
                className="w-full flex-shrink-0 flex justify-center"
              >
                <div className="relative w-full max-w-[400px] mx-auto">
                  <iframe
                    ref={(el) => {
                      iframeRefs.current[index] = el;
                    }}
                    src={`${post.url}embed`}
                    width="400"
                    height="500"
                    frameBorder="0"
                    scrolling="no"
                    allow="encrypted-media"
                    className="w-full rounded-lg border border-fire-ember/20 shadow-lg shadow-fire-ember/5"
                    title={`Instagram post ${index + 1}`}
                  />
                  {post.type === "video" && (
                    <div className="absolute top-3 right-3 bg-fire-ember text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-lg">
                      Video
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {INSTAGRAM_POSTS.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-fire-ember"
                  : "w-2 bg-muted hover:bg-fire-ember/50"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <button
            className="w-10 h-10 rounded-full bg-card border border-fire-ember/30 hover:bg-fire-ember/10 hover:border-fire-ember transition-all flex items-center justify-center text-fire-ember"
            onClick={prevSlide}
            aria-label="Post anterior"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="w-10 h-10 rounded-full bg-card border border-fire-ember/30 hover:bg-fire-ember/10 hover:border-fire-ember transition-all flex items-center justify-center text-fire-ember"
            onClick={nextSlide}
            aria-label="Siguiente post"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* View on Instagram link */}
        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/mateogourmet/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Ver más en Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
