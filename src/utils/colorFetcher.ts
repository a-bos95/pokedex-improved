import { TypeColorConfig, typeColors, PokemonType } from "../types/PokemonTypeColors";

const defaultColors: TypeColorConfig = {
  background: 'bg-gray-300/80',
  text: 'text-gray-700'
};

export function getTypeColors(type: PokemonType): TypeColorConfig {
  return typeColors[type] || defaultColors;
}