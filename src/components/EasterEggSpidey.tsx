import React from 'react';

type Props = {
  className?: string;
  title?: string;
};

/**
 * Tiny Spidey + web line, Miles palette.
 * Uses currentColor for accents so it can inherit.
 */
export default function EasterEggSpidey({ className = '', title = 'Spidey swinging' }: Props) {
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
      {/* Web line */}
      <rect x="15" y="0" width="2" height="100" rx="1" fill="#E5E7EB" opacity="0.95" />
      {/* Spidey head/body (simple circle + torso) */}
      <circle cx="16" cy="108" r="8" fill="#FF0040" />
      <circle cx="16" cy="92" r="6" fill="#1E1E1E" />
      {/* Eye shine */}
      <ellipse cx="13" cy="106" rx="2.5" ry="1.5" fill="#FFFFFF" opacity="0.85" />
      <ellipse cx="19" cy="106" rx="2.5" ry="1.5" fill="#FFFFFF" opacity="0.85" />
      {/* Blue accent */}
      <rect x="12" y="98" width="8" height="3" rx="1.5" fill="#00BFFF" />
    </svg>
  );
}


