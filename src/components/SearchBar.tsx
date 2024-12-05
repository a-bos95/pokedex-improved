import React from 'react';

interface SearchBarProps {
  placeholder?: string;
}

function SearchBar({ placeholder = "Search your Pokémon!" }: SearchBarProps) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-8 py-6 bg-white rounded-xl shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/20"
      />
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-red-500 p-2 rounded-lg text-white hover:bg-red-600 transition-colors"
        aria-label="Search"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
}

export default SearchBar; 