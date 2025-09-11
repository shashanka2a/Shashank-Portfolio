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
export default function EasterEggSpidey({ className = '', title = 'Spidey swinging', src, width = 56, height = 56 }: Props) {
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
      width="32"
      height="120"
      viewBox="0 0 32 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <title>{title}</title>
      <rect x="15" y="0" width="2" height="100" rx="1" fill="#E5E7EB" opacity="0.95" />
      <circle cx="16" cy="108" r="8" fill="#FF0040" />
      <circle cx="16" cy="92" r="6" fill="#1E1E1E" />
      <ellipse cx="13" cy="106" rx="2.5" ry="1.5" fill="#FFFFFF" opacity="0.85" />
      <ellipse cx="19" cy="106" rx="2.5" ry="1.5" fill="#FFFFFF" opacity="0.85" />
      <rect x="12" y="98" width="8" height="3" rx="1.5" fill="#00BFFF" />
    </svg>
  );
}


