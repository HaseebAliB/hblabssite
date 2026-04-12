import React from "react";

export function LogoIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Bottom Left Block */}
      <rect x="3" y="13" width="8" height="8" rx="2" fill="currentColor" />
      {/* Bottom Right Block (Agile/Growth) */}
      <rect x="13" y="13" width="8" height="8" rx="2" fill="currentColor" opacity="0.4" />
      {/* Top Center Block (Innovation/Vision) */}
      <rect x="8" y="3" width="8" height="8" rx="2" fill="currentColor" opacity="0.7" />
    </svg>
  );
}
