interface LogoProps {
  className?: string;
}

/**
 * Brand logo mark — a stylized car for the car-rental brand.
 * Swap this SVG for your real logo when available.
 */
export function Logo({ className = "h-10 w-10" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Brand logo"
    >
      <defs>
        <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>

      {/* Rounded badge background */}
      <rect x="8" y="8" width="84" height="84" rx="22" fill="url(#brandGradient)" />

      {/* Car body */}
      <path
        d="M28 58 L33 44 Q35 39 41 39 L59 39 Q65 39 67 44 L72 58 Q73 61 70 61 L66 61 L66 64 Q66 67 63 67 L60 67 Q57 67 57 64 L57 61 L43 61 L43 64 Q43 67 40 67 L37 67 Q34 67 34 64 L34 61 L30 61 Q27 61 28 58 Z"
        fill="#FFFFFF"
      />
      {/* Windshield */}
      <path d="M38 47 L41 42 L59 42 L62 47 Z" fill="#2563EB" opacity="0.85" />
      {/* Wheels */}
      <circle cx="40" cy="61" r="4" fill="#0F172A" />
      <circle cx="60" cy="61" r="4" fill="#0F172A" />
      {/* Speed lines */}
      <line x1="20" y1="50" x2="27" y2="50" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
      <line x1="22" y1="56" x2="27" y2="56" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export default Logo;
