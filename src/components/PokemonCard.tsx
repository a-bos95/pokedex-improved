import { Pokemon } from '../types/pokemon';
import CardTag from './CardTag';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  pokemon: Pokemon;
  className?: string;
}

export default function PokemonCard({ pokemon, className }: CardProps) {
  return (
    <div className={twMerge(`relative bg-white rounded-xl shadow-sm p-4 w-full ${className}`)}>
      <div className="w-full flex justify-center -mt-12 mb-6">
        <div className="w-24 h-24">
          <img 
            src={pokemon?.sprites?.front_default}
            alt={pokemon?.name}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-sm font-bold text-gray-400">N°{pokemon.id}</span>
        <h3 className="font-bold text-lg capitalize text-slate-900">{pokemon.name}</h3>
        <div className="flex gap-2 mt-3">
          {pokemon.types.map(({ type }) => (
            <CardTag key={type.name} type={type} />
          ))}
        </div>
      </div>
    </div>
  );
}