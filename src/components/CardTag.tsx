import { twMerge } from 'tailwind-merge';
import { PokemonType } from '../types/PokemonTypeColors';
import { getTypeColors } from '../utils/colorFetcher';

interface TagProps {
  type: {
    name: string;
  };
  className?: string;
}

export default function CardTag({ type, className }: TagProps) {
  const colors = getTypeColors(type.name as PokemonType);
  
  return (
    <span 
      className={twMerge(
        `px-6 py-2 text-xs font-bold rounded-md uppercase
        ${colors.background}
        ${colors.text}
        ${className}`
      )}
    >
      {type.name}
    </span>
  );
}
