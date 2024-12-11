interface Env {
  POKEMON_API_URL: string;
}

function validateEnv(): Env {
  const env = import.meta.env;
  
  if (!env.POKEMON_API_URL) {
    throw new Error('Missing POKEMON_API_URL');
  }
  
  if (!env.POKEMON_API_URL.startsWith('http')) {
    throw new Error('POKEMON_API_URL must be a valid URL');
  }

  return env as Env;
}

const env = validateEnv();

export const config = {
  apiUrl: env.POKEMON_API_URL,
} as const; 