export interface PokemonTypesListResponse {
    count: number;
    results: {
      name: string;
      url: string;
    }[];
  }