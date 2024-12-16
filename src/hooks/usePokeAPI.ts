import { useState, useCallback, useMemo } from 'react';
import { config } from '../config/env';
import { NamedAPIResource } from '../types/api';

type FetchOptions = {
  limit?: number;
  offset?: number;
  withDetails?: boolean;
};

export function usePokeAPI<T>(
  endpoint: string,
  options: FetchOptions = {}
) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const memoizedOptions = useMemo(() => options, [JSON.stringify(options)]);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const { limit = 20, offset = 0, withDetails = false } = memoizedOptions;
      
      const url = endpoint.startsWith('http') 
        ? endpoint 
        : `${config.apiUrl}${endpoint}?limit=${limit}&offset=${offset}`;

      const response = await fetch(url);
      let result = await response.json();

      if ('pokemon' in result) {
        const pokemonList = result.pokemon.map((p: any) => p.pokemon);
        const slicedList = pokemonList.slice(offset, offset + limit);
        const detailsPromises = slicedList.map((pokemon: NamedAPIResource) =>
          fetch(pokemon.url).then(res => res.json())
        );
        result = await Promise.all(detailsPromises);
      } else if ('results' in result && withDetails) {
        const detailsPromises = result.results.map((item: NamedAPIResource) =>
          fetch(item.url).then(res => res.json())
        );
        result = await Promise.all(detailsPromises);
      } else if ('results' in result) {
        result.results = result.results.map((item: NamedAPIResource) => ({
          ...item,
          name: item.name.charAt(0).toUpperCase() + item.name.slice(1)
        }));
      }

      return result as T;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [endpoint, memoizedOptions]);

  return { fetchData, isLoading, error };
} 