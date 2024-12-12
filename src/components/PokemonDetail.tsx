import { twMerge } from "tw-merge";
import CardTag from "./CardTag";

interface PokemonDetailProps {
  className?: string;
}

export default function PokemonDetail({ className }: PokemonDetailProps) {
  return (
    <div className={twMerge(`bg-white rounded-xl shadow-sm p-6 ${className}`)}>
      <div className="w-full flex justify-center -mt-12 mb-6">
        <div className="w-56 h-56">
          <img 
            src="https://placehold.co/256x256"
            alt="placeholder"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex flex-col items-center text-center">
          <span className="text-sm text-gray-400">N°387</span>
          <h2 className="text-2xl font-bold text-slate-800">Turtwig</h2>
          <span className="text-sm text-gray-400">Emperor Pokémon</span>
        </div>
        <div className="flex gap-2 justify-center">
          <CardTag type={{ name: 'grass' }} />
          <CardTag type={{ name: 'poison' }} />
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <h3 className="font-bold text-slate-900 uppercase tracking-wide">Pokedex Entry</h3>
          <p className="text-sm text-slate-600">
            Made from soil, the shell on its back hardens when it drinks water. It lives along lakes.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <h3 className="font-bold text-slate-800 uppercase tracking-wide">Abilities</h3>
          <div className="flex gap-2 justify-center w-full">
            <span className="flex-1 py-2 font-bold bg-gray-100 text-slate-800 border border-red-500 rounded-full tracking-wide text-center">
              Torrent
            </span>
            <span className="flex-1 py-2 font-bold bg-gray-100 text-slate-800 rounded-full tracking-wide text-center">
              Defiant
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex justify-center gap-4 w-full">
              <div className="flex flex-col items-center gap-1 flex-1">
                <h3 className="font-bold text-slate-800 uppercase tracking-wide">Height</h3>
                <span className="w-full py-2 font-bold bg-gray-100 text-slate-800 border border-red-500 rounded-full tracking-wide text-center">
                  0.4 m
                </span>
              </div>
              <div className="flex flex-col items-center gap-1 flex-1">
                <h3 className="font-bold text-slate-800 uppercase tracking-wide">Weight</h3>
                <span className="w-full py-2 font-bold bg-gray-100 text-slate-800 border border-red-500 rounded-full tracking-wide text-center">
                  10.2 kg
                </span>
              </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex justify-center gap-4 w-full">
              <div className="flex flex-col items-center gap-1 flex-1">
                <h3 className="font-bold text-slate-800 uppercase tracking-wide">Weaknesses</h3>
                <span className="w-full py-2 bg-gray-100 rounded-full">
                  Fire, Ice, Flying, Psychic
                </span>
              </div>
              <div className="flex flex-col items-center gap-1 flex-1">
                <h3 className="font-bold text-slate-800 uppercase tracking-wide">Base Exp</h3>
                <span className="w-full py-2 font-bold bg-gray-100 text-slate-800 border border-red-500 rounded-full tracking-wide text-center">
                  10.2 kg
                </span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
} 