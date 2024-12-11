/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly POKEMON_API_URL: string;
}

declare module 'vite/client' {
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}
