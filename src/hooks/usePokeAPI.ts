import { useState, useEffect } from 'react';
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
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { limit = 20, offset = 0, withDetails = false } = options;
        
        // Build URL with query parameters if provided
        const queryParams = new URLSearchParams();
        if (limit) queryParams.append('limit', limit.toString());
        if (offset) queryParams.append('offset', offset.toString());
        
        const url = `${config.apiUrl}${endpoint}${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
        const response = await fetch(url);
        let result = await response.json();

        // Handle list responses that need details
        if ('results' in result && withDetails) {
          const detailsPromises = result.results.map((item: NamedAPIResource) =>
            fetch(item.url).then(res => res.json())
          );
          result = await Promise.all(detailsPromises);
        }
        
        // For simple list responses (types, abilities), transform names to capitalized
        if ('results' in result && !withDetails) {
          result.results = result.results.map((item: NamedAPIResource) => ({
            ...item,
            name: item.name.charAt(0).toUpperCase() + item.name.slice(1)
          }));
        }

        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint, JSON.stringify(options)]);

  return { data, isLoading, error };
} 