"use client";

interface NeonArrowsProps {
  targetId?: string;
  className?: string;
}

const NeonArrows = ({ targetId, className = "" }: NeonArrowsProps) => {
  return (
    <div className={`relative pointer-events-none ${className}`}>
      {/* Arrow 1 - Bottom Left */}
      <svg
        className="absolute -bottom-16 left-8 w-12 h-12 sm:w-16 sm:h-16 md:-bottom-20 md:left-12 animate-neon-pulse"
        style={{ animationDelay: "0s" }}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow1">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M7 17L17 7M17 7H9M17 7V15"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow1)"
          className="neon-stroke"
        />
      </svg>

      {/* Arrow 2 - Bottom Center */}
      <svg
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-14 h-14 sm:w-20 sm:h-20 md:-bottom-24 animate-neon-pulse"
        style={{ animationDelay: "0.2s" }}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow2">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M12 19V5M12 5L5 12M12 5L19 12"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow2)"
          className="neon-stroke"
        />
      </svg>

      {/* Arrow 3 - Bottom Right */}
      <svg
        className="absolute -bottom-16 right-8 w-12 h-12 sm:w-16 sm:h-16 md:-bottom-20 md:right-12 animate-neon-pulse"
        style={{ animationDelay: "0.4s" }}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow3">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M17 17L7 7M7 7H15M7 7V15"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow3)"
          className="neon-stroke"
        />
      </svg>

      <style jsx>{`
        .neon-stroke {
          filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))
            drop-shadow(0 0 16px rgba(255, 255, 255, 0.6))
            drop-shadow(0 0 24px rgba(255, 255, 255, 0.4));
        }

        @keyframes neon-pulse {
          0%,
          100% {
            opacity: 0.3;
            filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.4))
              drop-shadow(0 0 8px rgba(255, 255, 255, 0.3));
          }
          50% {
            opacity: 1;
            filter: drop-shadow(0 0 12px rgba(255, 255, 255, 1))
              drop-shadow(0 0 24px rgba(255, 255, 255, 0.8))
              drop-shadow(0 0 36px rgba(255, 255, 255, 0.6));
          }
        }

        .animate-neon-pulse {
          animation: neon-pulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default NeonArrows;
