interface Props {
  number: string;
  name: string;
  types: string[];
  className?: string;
}

import { twMerge } from 'tailwind-merge';

export default function PokemonCard({ number, name, types, className }: Props) {
  return (
    <div className={twMerge(`relative bg-white rounded-xl shadow-sm p-4 w-full ${className}`)}>
      <div className="w-full flex justify-center -mt-12 mb-2">
        <div className="w-24 h-24">
          <img 
            src={`https://placehold.co/96x96`}
            alt={name}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-2">
        <span className="text-sm font-bold text-gray-400">N°{number}</span>
        <h3 className="font-bold text-slate-900">{name}</h3>
        <div className="flex gap-2 mt-3">
          {types.map(type => (
            <span key={type} className="px-3 py-1 text-sm font-medium bg-gray-100 rounded-full">
              {type}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}