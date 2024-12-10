import { twMerge } from 'tailwind-merge';
import { PokemonType, getTypeColors } from '../types/pokemon';

interface TagProps {
  type: PokemonType;
  className?: string;
}

export default function CardTag({ type, className }: TagProps) {
  const colors = getTypeColors(type.name);
  
  return (
    <span 
      className={twMerge(
        "px-6 py-2 text-xs font-bold rounded-md uppercase",
        colors.background,
        colors.text,
        className
      )}
    >
      {type.name}
    </span>
  );
}
