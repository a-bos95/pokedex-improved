export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  sprites: {
    front_default: string;
    // ... other sprite properties
  };
}

interface TypeColorConfig {
  background: string;
  text: string;
}

type TypeColors = Record<string, TypeColorConfig>;

export const typeColors: TypeColors = {
  normal: {
    background: 'bg-neutral-300/80',
    text: 'text-neutral-700'
  },
  fire: {
    background: 'bg-orange-400/80',
    text: 'text-orange-900'
  },
  water: {
    background: 'bg-blue-300/80',
    text: 'text-blue-900'
  },
  electric: {
    background: 'bg-yellow-300/80',
    text: 'text-yellow-900'
  },
  grass: {
    background: 'bg-green-300/80',
    text: 'text-green-900'
  },
  ice: {
    background: 'bg-cyan-200/80',
    text: 'text-cyan-900'
  },
  fighting: {
    background: 'bg-red-300/80',
    text: 'text-red-900'
  },
  poison: {
    background: 'bg-purple-300/80',
    text: 'text-purple-900'
  },
  ground: {
    background: 'bg-amber-300/80',
    text: 'text-amber-900'
  },
  flying: {
    background: 'bg-indigo-300/80',
    text: 'text-indigo-900'
  },
  psychic: {
    background: 'bg-pink-300/80',
    text: 'text-pink-900'
  },
  bug: {
    background: 'bg-lime-300/80',
    text: 'text-lime-900'
  },
  rock: {
    background: 'bg-stone-300/80',
    text: 'text-stone-900'
  },
  ghost: {
    background: 'bg-purple-400/80',
    text: 'text-purple-900'
  },
  dragon: {
    background: 'bg-violet-300/80',
    text: 'text-violet-900'
  },
  steel: {
    background: 'bg-slate-300/80',
    text: 'text-slate-900'
  }
} as const;

// Default colors for unknown types
const defaultColors: TypeColorConfig = {
  background: 'bg-gray-300/80',
  text: 'text-gray-700'
};

export function getTypeColors(type: string): TypeColorConfig {
  return typeColors[type] || defaultColors;
}

export interface PokemonType {
  name: string;
  url: string;
} 