export enum PokemonType {
  Normal = 'normal',
  Fire = 'fire',
  Water = 'water',
  Electric = 'electric',
  Grass = 'grass',
  Ice = 'ice',
  Fighting = 'fighting',
  Poison = 'poison',
  Ground = 'ground',
  Flying = 'flying',
  Psychic = 'psychic',
  Bug = 'bug',
  Rock = 'rock',
  Ghost = 'ghost',
  Dragon = 'dragon',
  Steel = 'steel',
  Dark = 'dark',
  Fairy = 'fairy',
  Unknown = 'unknown',
  Shadow = 'shadow'
}

export interface TypeColorConfig {
  background: string;
  text: string;
}

type TypeColors = Record<PokemonType, TypeColorConfig>;

export const typeColors: TypeColors = {
  [PokemonType.Normal]: {
    background: 'bg-neutral-300/80',
    text: 'text-neutral-700'
  },
  [PokemonType.Fire]: {
    background: 'bg-orange-400/80',
    text: 'text-orange-900'
  },
  [PokemonType.Water]: {
    background: 'bg-blue-300/80',
    text: 'text-blue-900'
  },
  [PokemonType.Electric]: {
    background: 'bg-yellow-300/80',
    text: 'text-yellow-900'
  },
  [PokemonType.Grass]: {
    background: 'bg-green-300/80',
    text: 'text-green-900'
  },
  [PokemonType.Ice]: {
    background: 'bg-cyan-200/80',
    text: 'text-cyan-900'
  },
  [PokemonType.Fighting]: {
    background: 'bg-red-300/80',
    text: 'text-red-900'
  },
  [PokemonType.Poison]: {
    background: 'bg-purple-300/80',
    text: 'text-purple-900'
  },
  [PokemonType.Ground]: {
    background: 'bg-amber-300/80',
    text: 'text-amber-900'
  },
  [PokemonType.Flying]: {
    background: 'bg-indigo-300/80',
    text: 'text-indigo-900'
  },
  [PokemonType.Psychic]: {
    background: 'bg-pink-300/80',
    text: 'text-pink-900'
  },
  [PokemonType.Bug]: {
    background: 'bg-lime-300/80',
    text: 'text-lime-900'
  },
  [PokemonType.Rock]: {
    background: 'bg-stone-300/80',
    text: 'text-stone-900'
  },
  [PokemonType.Ghost]: {
    background: 'bg-purple-400/80',
    text: 'text-purple-900'
  },
  [PokemonType.Dragon]: {
    background: 'bg-violet-300/80',
    text: 'text-violet-900'
  },
  [PokemonType.Steel]: {
    background: 'bg-slate-300/80',
    text: 'text-slate-900'
  },
  [PokemonType.Dark]: {
    background: 'bg-zinc-600/80',
    text: 'text-zinc-100'
  },
  [PokemonType.Fairy]: {
    background: 'bg-pink-200/80',
    text: 'text-pink-900'
  },
  [PokemonType.Unknown]: {
    background: 'bg-gray-300/80',
    text: 'text-gray-700'
  },
  [PokemonType.Shadow]: {
    background: 'bg-neutral-600/80',
    text: 'text-neutral-100'
  }
} as const;