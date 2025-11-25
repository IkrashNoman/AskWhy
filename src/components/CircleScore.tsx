import React from "react";

const CircleScore = ({ scoreDrop = 5, size = 100, strokeWidth = 10 }) => {
  const score = scoreDrop;

  // Responsiveness: scale size based on screen width without touching logic
  const responsiveSize =
    typeof window !== "undefined"
      ? window.innerWidth < 380
        ? size * 0.65
        : window.innerWidth < 500
        ? size * 0.75
        : window.innerWidth < 768
        ? size * 0.85
        : size
      : size;

  const finalSize = responsiveSize;
  const center = finalSize / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const innerSize = Math.max(0, finalSize - 2 * strokeWidth);

  return (
    <div
      className="
        flex justify-center items-center mb-6 relative 
        w-[100px] h-[100px]
        sm:w-[110px] sm:h-[110px]
        md:w-[120px] md:h-[120px]
        lg:w-[130px] lg:h-[130px]
      "
      style={{
        width: finalSize,
        height: finalSize,
      }}
    >
      <svg
        width={finalSize}
        height={finalSize}
        viewBox={`0 0 ${finalSize} ${finalSize}`}
        className="rotate-[0deg]"
        style={{ maxWidth: "100%", height: "auto" }}
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="#EDE1D0"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference * 0.95}
          strokeDashoffset={circumference * (1 - 0.95)}
        />

        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="url(#scoreGradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference * 0.95}
          strokeDashoffset={offset * 0.95}
        />

        <defs>
          <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D0193E" />
            <stop offset="100%" stopColor="#5F237B" />
          </linearGradient>
        </defs>
      </svg>

      <div
        className="
          absolute rounded-full flex items-center justify-center
        "
        style={{
          width: innerSize,
          height: innerSize,
          background: "#FDF8F3",
          transform: "translate(-50%, -50%)",
          left: "50%",
          top: "50%",
        }}
      >
        <span
          className="
            font-bold
            text-[16px]
            sm:text-[18px]
            md:text-[20px]
          "
          style={{
            color: "#5F237B",
            fontWeight: 700,
            fontSize: Math.round(innerSize * 0.28),
            lineHeight: 1,
          }}
        >
          {score}%
        </span>
      </div>
    </div>
  );
};

export default CircleScore;
