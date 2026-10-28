import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface MolecularBackdropProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const MolecularBackdrop: React.FC<MolecularBackdropProps> = ({
  variant = 'light',
  className = '',
}) => {
  const prefersReducedMotion = useReducedMotion();
  const strokePrimary = variant === 'light' ? '#0A6EBD' : '#60A5FA';
  const strokeAccent = variant === 'light' ? '#38B000' : '#4ADE80';

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute -top-32 right-0 h-[520px] w-[520px] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            variant === 'light'
              ? 'radial-gradient(circle, rgba(10,110,189,0.22) 0%, rgba(56,176,0,0.08) 55%, transparent 75%)'
              : 'radial-gradient(circle, rgba(10,110,189,0.35) 0%, rgba(56,176,0,0.14) 55%, transparent 75%)',
        }}
      />

      {/* Animated Molecular Hexagonal Ring System */}
      <motion.svg
        viewBox="0 0 800 600"
        fill="none"
        className="absolute right-[-6%] top-[-4%] h-[540px] w-[720px] opacity-[0.16]"
        animate={
          prefersReducedMotion
            ? {}
            : {
                y: [0, -12, 0],
                rotate: [0, 1.5, 0],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Ring A (Hexagon) */}
        <polygon
          points="420,120 480,155 480,225 420,260 360,225 360,155"
          stroke={strokePrimary}
          strokeWidth="2"
        />
        <polygon
          points="420,134 468,162 468,218 420,246 372,218 372,162"
          stroke={strokePrimary}
          strokeWidth="1"
          strokeDasharray="6 6"
        />
        {/* Ring B (Fused Hexagon) */}
        <polygon
          points="540,120 600,155 600,225 540,260 480,225 480,155"
          stroke={strokePrimary}
          strokeWidth="2"
        />
        {/* Ring C (Offset Ring) */}
        <polygon
          points="600,225 660,260 660,330 600,365 540,330 540,260"
          stroke={strokeAccent}
          strokeWidth="2"
        />
        {/* Covalent Bond Lines */}
        <line x1="420" y1="120" x2="420" y2="65" stroke={strokePrimary} strokeWidth="2" />
        <line x1="360" y1="225" x2="305" y2="258" stroke={strokePrimary} strokeWidth="2" />
        <line x1="660" y1="260" x2="718" y2="225" stroke={strokeAccent} strokeWidth="2" />
        <line x1="600" y1="365" x2="600" y2="425" stroke={strokeAccent} strokeWidth="2" />

        {/* Atomic Vertices */}
        <circle cx="420" cy="65" r="7" fill={strokePrimary} />
        <circle cx="305" cy="258" r="7" fill={strokePrimary} />
        <circle cx="718" cy="225" r="8" fill={strokeAccent} />
        <circle cx="600" cy="425" r="7" fill={strokeAccent} />
        <circle cx="480" cy="155" r="5" fill={strokePrimary} />
        <circle cx="540" cy="260" r="5" fill={strokeAccent} />
      </motion.svg>

      {/* Secondary Floating Cellular Helix Ring (Bottom Left) */}
      <motion.svg
        viewBox="0 0 400 400"
        fill="none"
        className="absolute bottom-[-8%] left-[-4%] h-[360px] w-[360px] opacity-[0.12]"
        animate={
          prefersReducedMotion
            ? {}
            : {
                y: [0, 10, 0],
                rotate: [0, -2, 0],
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <circle
          cx="200"
          cy="200"
          r="140"
          stroke={strokePrimary}
          strokeWidth="1.5"
          strokeDasharray="8 8"
        />
        <circle cx="200" cy="200" r="95" stroke={strokeAccent} strokeWidth="1.5" />
        <circle cx="200" cy="60" r="6" fill={strokePrimary} />
        <circle cx="295" cy="200" r="6" fill={strokeAccent} />
        <circle cx="105" cy="200" r="5" fill={strokePrimary} />
      </motion.svg>
    </div>
  );
};
