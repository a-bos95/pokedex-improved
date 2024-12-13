// Base interface for API list responses
export interface APIListResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

// Common result type for simple name/url pairs
export interface NamedAPIResource {
  name: string;
  url: string;
}

// Pokemon specific types
export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  types: {
    slot: number;
    type: NamedAPIResource;
  }[];
  abilities: {
    ability: NamedAPIResource;
    is_hidden: boolean;
    slot: number;
  }[];
  stats: {
    base_stat: number;
    effort: number;
    stat: NamedAPIResource;
  }[];
  sprites: {
    front_default: string;
    // Add other sprite properties as needed
  };
}

// Type aliases for common responses
export type PokemonListResponse = APIListResponse<NamedAPIResource>;
export type TypeListResponse = APIListResponse<NamedAPIResource>;
export type AbilityListResponse = APIListResponse<NamedAPIResource>; 