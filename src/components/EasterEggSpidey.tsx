import React from 'react';

type Props = {
  className?: string;
  title?: string;
  src?: string; // optional external/public asset to use instead of inline SVG
  width?: number;
  height?: number;
};

/**
 * Tiny Spidey + web line, Miles palette.
 * Uses currentColor for accents so it can inherit.
 */
export default function EasterEggSpidey({ className = '', title = 'Spidey swinging', src, width = 40, height = 52 }: Props) {
  // If a custom asset path is provided, render that image with a small web line above.
  if (src) {
    return (
      <div className={`relative ${className}`} aria-hidden="true" title={title}>
        <div className="absolute left-1/2 -translate-x-1/2 -top-8 h-8 w-[2px] bg-white/90" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={width} height={height} alt="" className="block select-none pointer-events-none drop-shadow-[0_0_6px_rgba(255,0,64,0.6)]" />
      </div>
    );
  }

  // Fallback to inline SVG if no asset provided
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 40 52"
      role="img"
      aria-label={title}
    >
      {/* web line */}
      <line x1="20" y1="0" x2="20" y2="14" stroke="#e5e7eb" strokeWidth="1.5" strokeDasharray="2,2" />
      {/* body */}
      <g transform="translate(10,14)">
        <circle cx="10" cy="6" r="6" fill="#111827" />
        <rect x="7" y="12" width="6" height="12" rx="3" fill="#111827" />
        {/* eyes */}
        <ellipse cx="8.2" cy="6" rx="2" ry="1.4" fill="#fff" />
        <ellipse cx="11.8" cy="6" rx="2" ry="1.4" fill="#fff" />
        {/* legs */}
        <g strokeWidth="2.4" strokeLinecap="round" fill="none">
          <path d="M6 14 L2 18" stroke="#ef4444" />
          <path d="M6 18 L2 22" stroke="#22d3ee" />
          <path d="M14 14 L18 18" stroke="#ef4444" />
          <path d="M14 18 L18 22" stroke="#22d3ee" />
        </g>
      </g>
    </svg>
  );
}


