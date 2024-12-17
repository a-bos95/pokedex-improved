import { twMerge } from "tw-merge";
import CardTag from "./CardTag";
import { ArrowIcon } from "./Icons";

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
                  239
                </span>
              </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-bold text-slate-800 uppercase tracking-wide">Stats</h3>
          <div className="grid grid-cols-7 gap-1">
            <div className="flex flex-col items-center bg-gray-100 rounded-full p-1.5">
              <span className="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold">HP</span>
              <span className="text-xs font-bold text-slate-700">84</span>
            </div>
            <div className="flex flex-col items-center bg-gray-100 rounded-full p-1.5">
              <span className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold">ATK</span>
              <span className="text-xs font-bold text-slate-700">86</span>
            </div>
            <div className="flex flex-col items-center bg-gray-100 rounded-full p-1.5">
              <span className="w-7 h-7 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs font-bold">DEF</span>
              <span className="text-xs font-bold text-slate-700">88</span>
            </div>
            <div className="flex flex-col items-center bg-gray-100 rounded-full p-1.5">
              <span className="w-7 h-7 rounded-full bg-blue-400 flex items-center justify-center text-white text-xs font-bold">SpA</span>
              <span className="text-xs font-bold text-slate-700">111</span>
            </div>
            <div className="flex flex-col items-center bg-gray-100 rounded-full p-1.5">
              <span className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">SpD</span>
              <span className="text-xs font-bold text-slate-700">101</span>
            </div>
            <div className="flex flex-col items-center bg-gray-100 rounded-full p-1.5">
              <span className="w-7 h-7 rounded-full bg-pink-400 flex items-center justify-center text-white text-xs font-bold">SPD</span>
              <span className="text-xs font-bold text-slate-700">60</span>
            </div>
            <div className="flex flex-col items-center bg-gray-100 rounded-full p-1.5">
              <span className="w-7 h-7 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold">TOT</span>
              <span className="text-xs font-bold text-slate-700">530</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-bold text-slate-800 uppercase tracking-wide">Evolution</h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img src="https://placehold.co/64x64" alt="First evolution" className="w-16 h-16 object-contain" />
              <span className="text-xs text-gray-500 rounded-full px-2 py-1 bg-gray-100 whitespace-nowrap">Lvl 16</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="https://placehold.co/64x64" alt="Second evolution" className="w-16 h-16 object-contain" />
              <span className="text-xs text-gray-500 rounded-full px-2 py-1 bg-gray-100 whitespace-nowrap">Lvl 36</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="https://placehold.co/64x64" alt="Final evolution" className="w-16 h-16 object-contain" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4 px-4 py-3 bg-gray-100 rounded-xl">
          <button className="hover:bg-gray-200 p-1.5 rounded-lg transition-colors">
            <ArrowIcon className="w-5 h-5 text-gray-400 transform rotate-90" />
          </button>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <img src="https://placehold.co/32x32" alt="Previous Pokemon" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-600">#386 Starly</span>
            </div>
            <div className="w-px h-5 bg-gray-300"></div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-medium text-gray-600">#388 Starly</span>
              <img src="https://placehold.co/32x32" alt="Next Pokemon" className="w-6 h-6" />
            </div>
          </div>

          <button className="hover:bg-gray-200 p-1.5 rounded-lg transition-colors">
            <ArrowIcon className="w-5 h-5 text-gray-400 transform -rotate-90" />
          </button>
        </div>
      </div>
    </div>
  );
} 