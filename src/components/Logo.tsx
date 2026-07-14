interface LogoProps {
  className?: string;
  height?: number;
}

export const Logo = ({ className = "", height = 56 }: LogoProps) => {
  const w = Math.round(height * (224 / 56));
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 224 224"
      width={w}
      height={height}
      className={className}
      role="img"
      aria-label="Mahadev24x7 — India's #1 online cricket betting ID provider"
    >
      <title>Mahadev24x7</title>
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5d07a" />
          <stop offset="40%" stopColor="#c9920a" />
          <stop offset="70%" stopColor="#e8b842" />
          <stop offset="100%" stopColor="#a0700a" />
        </linearGradient>
        <linearGradient id="goldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5d07a" />
          <stop offset="50%" stopColor="#c9920a" />
          <stop offset="100%" stopColor="#f5d07a" />
        </linearGradient>
      </defs>

      {/* Outer diamond border */}
      <rect x="14" y="14" width="196" height="196" rx="12" ry="12"
        transform="rotate(45 112 112)"
        fill="url(#goldBorder)" />

      {/* Inner diamond background */}
      <rect x="20" y="20" width="184" height="184" rx="10" ry="10"
        transform="rotate(45 112 112)"
        fill="#0a0a0a" />

      {/* Trishul symbol */}
      <g transform="translate(112,44) scale(0.55)" fill="url(#goldGrad)">
        <rect x="-2" y="0" width="4" height="38" rx="2"/>
        <rect x="-14" y="0" width="4" height="26" rx="2" transform="rotate(-12 -12 0)"/>
        <rect x="10" y="0" width="4" height="26" rx="2" transform="rotate(12 12 0)"/>
        <path d="M-16,-12 Q-12,-22 -8,-12" fill="none" stroke="url(#goldGrad)" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M8,-12 Q12,-22 16,-12" fill="none" stroke="url(#goldGrad)" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M-2,-14 Q0,-26 2,-14" fill="none" stroke="url(#goldGrad)" strokeWidth="3.5" strokeLinecap="round"/>
        <ellipse cx="0" cy="40" rx="5" ry="3" fill="url(#goldGrad)"/>
      </g>

      {/* MAHADEV text */}
      <text
        x="112" y="128"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="900"
        fontSize="34"
        letterSpacing="2"
        fill="url(#goldGrad)"
      >MAHADEV</text>

      {/* 24X7 text */}
      <text
        x="112" y="158"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="900"
        fontSize="28"
        letterSpacing="3"
        fill="url(#goldGrad)"
      >24X7</text>

      {/* Tagline */}
      <text
        x="112" y="178"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="10"
        letterSpacing="2"
        fill="url(#goldGrad)"
      >THE MOST TRUSTED</text>
    </svg>
  );
};
