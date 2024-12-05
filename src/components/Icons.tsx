interface Props {
  className: string;
}

// Navigation Icons
export const HomeIcon = ({ className }: Props) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

export const PokedexIcon = ({ className }: Props) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none"
    stroke="currentColor"
  >
    <circle cx="12" cy="12" r="10" strokeWidth={2} />
    <circle cx="12" cy="12" r="3" strokeWidth={2} />
  </svg>
);

export const GameIcon = ({ className }: Props) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none"
    stroke="currentColor"
  >
    <rect x="2" y="6" width="20" height="12" rx="2" strokeWidth={2} />
    <circle cx="8" cy="12" r="2" />
    <path d="M16 11h2" strokeWidth={2} strokeLinecap="round" />
    <path d="M16 13h2" strokeWidth={2} strokeLinecap="round" />
  </svg>
);

export const GccIcon = ({ className }: Props) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none"
    stroke="currentColor"
  >
    <rect x="3" y="6" width="18" height="12" rx="1" strokeWidth={2} />
    <path d="M7 10h10" strokeWidth={2} strokeLinecap="round" />
  </svg>
);

export const TvIcon = ({ className }: Props) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none"
    stroke="currentColor"
  >
    <rect x="2" y="7" width="20" height="15" rx="2" strokeWidth={2} />
    <path d="M17 3l-5 4-5-4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PlayIcon = ({ className }: Props) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none"
    stroke="currentColor"
  >
    <path d="M8 5v14l11-7z" strokeWidth={2} strokeLinejoin="round" />
  </svg>
);

export const NewsIcon = ({ className }: Props) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
    />
  </svg>
);

// Filter Icons
export const TypeIcon = ({ className }: Props) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10M7 12h10M7 17h10" />
  </svg>
);

export const WeaknessIcon = ({ className }: Props) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

export const AbilityIcon = ({ className }: Props) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

export const HeightIcon = ({ className }: Props) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 3v18M3 8h10M3 18h10" />
  </svg>
);

export const WeightIcon = ({ className }: Props) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <circle cx="12" cy="12" r="10" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8" />
  </svg>
);