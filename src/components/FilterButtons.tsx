import { useState, useRef, useEffect } from 'react';
import { TypeIcon, WeaknessIcon, AbilityIcon, HeightIcon, WeightIcon, ArrowIcon } from './Icons';
import { twMerge } from 'tw-merge';
import ResetButton from './ResetButton';
import { usePokeAPI } from '../hooks/usePokeAPI';
import { NamedAPIResource } from '../types/api';

interface FilterButtonProps {
  label: string;
  options?: string[];
  icon: React.ReactNode;
  className?: string;
  endpoint: string;
  onFilterChange: (filter: { type: string; url: string } | null) => void;
  activeFilter: { type: string; url: string } | null;
}

function FilterButton({ 
  label, 
  icon, 
  className, 
  endpoint,
  onFilterChange,
  activeFilter 
}: FilterButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filterOptions, setFilterOptions] = useState<NamedAPIResource[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const { fetchData, isLoading, error } = usePokeAPI<{results: NamedAPIResource[]}>(endpoint, {
    withDetails: false
  });

  useEffect(() => {
    fetchData().then(data => {
      if (data) setFilterOptions(data.results);
    });
  }, []);

  const handleFilterSelect = (item: NamedAPIResource) => {
    onFilterChange({ type: endpoint, url: item.url });
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isSelected = activeFilter?.type === endpoint;
  const selectedName = isSelected 
    ? filterOptions.find(opt => opt.url === activeFilter.url)?.name 
    : null;

  return (
    <div ref={dropdownRef} className={twMerge(`relative ${className}`)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow-md hover:bg-gray-50 min-w-40 justify-between"
      >
        <div className="flex items-center gap-2">
          {icon}
          <span className="font-bold text-gray-400">
            {selectedName || label}
          </span>
        </div>
        <ArrowIcon className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 min-w-40 bg-white rounded-lg shadow-lg py-1 z-10">
          {isLoading ? (
            <div className="px-4 py-2 text-sm text-gray-500">Loading...</div>
          ) : error ? (
            <div className="px-4 py-2 text-sm text-red-500">Error loading options</div>
          ) : (
            filterOptions.map((item: NamedAPIResource) => (
              <button
                key={item.name}
                onClick={() => handleFilterSelect(item)}
                className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 text-neutral-500`}
              >
                {item.name}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}

interface FilterButtonsProps {
  className?: string;
  onFilterChange: (filter: { type: string; url: string } | null) => void;
  activeFilter: { type: string; url: string } | null;
}

export default function FilterButtons({ className, onFilterChange, activeFilter }: FilterButtonsProps) {
  return (
    <div className={twMerge(`flex gap-2 ${className}`)}>
      <FilterButton 
        label="Type" 
        endpoint="type"
        icon={<TypeIcon className="w-4 h-4 text-gray-400" />}
        onFilterChange={onFilterChange}
        activeFilter={activeFilter}
      />
      <FilterButton 
        label="Weaknesses" 
        endpoint="type"
        icon={<WeaknessIcon className="w-4 h-4 text-gray-400" />}
        onFilterChange={onFilterChange}
        activeFilter={activeFilter}
      />
      <FilterButton 
        label="Ability" 
        endpoint="ability"
        icon={<AbilityIcon className="w-4 h-4 text-gray-400" />}
        onFilterChange={onFilterChange}
        activeFilter={activeFilter}
      />
      <FilterButton 
        label="Height" 
        endpoint="pokemon-shape"  // TODO: Use appropriate endpoint for height
        icon={<HeightIcon className="w-4 h-4 text-gray-400" />}
        onFilterChange={onFilterChange}
        activeFilter={activeFilter}
      />
      <FilterButton 
        label="Weight" 
        endpoint="pokemon-shape"  // TODO: Use appropriate endpoint for weight
        icon={<WeightIcon className="w-4 h-4 text-gray-400" />}
        onFilterChange={onFilterChange}
        activeFilter={activeFilter}
      />
      <ResetButton 
        className="flex flex-col rounded-md px-3 py-2 text-sm font-medium bg-slate-500 hover:bg-slate-600 transition-colors"
        onClick={() => onFilterChange(null)}
      />
    </div>
  );
}