import { twMerge } from "tw-merge";
import { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  onSearch: (query: string) => void;
}

function SearchBar({ placeholder = "Search your Pokémon!", className, onSearch, ...props }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className={twMerge(`relative ${className}`)} {...props}>
      <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full px-8 py-6 bg-white rounded-xl shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/20"
      />
      <button
        type="submit"
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
    </form>
    </div>
  );
}

export default SearchBar; 