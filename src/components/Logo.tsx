import React from 'react';

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
  withText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const LogoMark: React.FC<{ className?: string; size?: number }> = ({ className = "w-9 h-9", size = 36 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      {/* Incomplete elegant circle with subtle tapered gap */}
      <circle
        cx="50"
        cy="50"
        r="44"
        stroke="#D8B477"
        strokeWidth="1.75"
        strokeDasharray="230 45"
        strokeLinecap="round"
        className="opacity-90"
      />

      {/* Crescent henna curve & flowing hair lock */}
      <path
        d="M50 14C32 14 20 30 22 50C24 68 40 84 62 82C74 81 83 72 84 60C85 45 74 38 64 36C50 33 42 42 42 52C42 60 48 66 56 65C62 64 66 59 66 53C66 45 59 41 53 43"
        stroke="#D8B477"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Delicate henna leaf detail */}
      <path
        d="M48 24C53 20 60 21 63 26C60 30 53 31 48 24Z"
        fill="#D8B477"
        fillOpacity="0.8"
      />
      <path
        d="M62 26C66 23 72 24 74 29C70 32 64 33 62 26Z"
        fill="#D8B477"
        fillOpacity="0.6"
      />

      {/* Subtle central dot */}
      <circle cx="50" cy="50" r="2" fill="#D8B477" />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  className = "",
  withText = true,
  size = 'md',
}) => {
  const markSize = size === 'sm' ? 28 : size === 'lg' ? 44 : 34;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <LogoMark size={markSize} className="transition-transform duration-300 group-hover:scale-105" />
      {withText && (
        <div className="flex flex-col justify-center leading-none">
          <span className="font-serif tracking-[0.2em] text-lg lg:text-xl font-medium text-[#F3EEE6] group-hover:text-[#D8B477] transition-colors uppercase">
            HASNA
          </span>
          <span className="text-[9px] tracking-[0.25em] text-[#D8B477] uppercase font-light mt-1">
            1996 · BEAUTY CENTER
          </span>
        </div>
      )}
    </div>
  );
};
