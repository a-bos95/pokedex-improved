import { useState, useRef, useEffect } from 'react';
import { TypeIcon, WeaknessIcon, AbilityIcon, HeightIcon, WeightIcon } from './Icons';

interface FilterButtonProps {
  label: string;
  options: string[];
  icon: React.ReactNode;
}

function FilterButton({ label, options, icon }: FilterButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 min-w-40 justify-between"
      >
        <div className="flex items-center gap-2">
          {icon}
          <span className="font-bold text-neutral-500">
            {selected || label}
          </span>
        </div>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-40 bg-white rounded-lg shadow-lg py-1 z-10">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 text-neutral-500`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function FilterButtons() {
  return (
    <div className="flex flex-wrap gap-2">
      <FilterButton 
        label="Type" 
        options={['Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice']}
        icon={<TypeIcon className="w-4 h-4 text-slate-800" />}
      />
      <FilterButton 
        label="Weaknesses" 
        options={['Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice']}
        icon={<WeaknessIcon className="w-4 h-4 text-slate-800" />}
      />
      <FilterButton 
        label="Ability" 
        options={['Overgrow', 'Blaze', 'Torrent', 'Shield Dust']}
        icon={<AbilityIcon className="w-4 h-4 text-slate-800" />}
      />
      <FilterButton 
        label="Height" 
        options={['Short', 'Medium', 'Tall']}
        icon={<HeightIcon className="w-4 h-4 text-slate-800" />}
      />
      <FilterButton 
        label="Weight" 
        options={['Light', 'Medium', 'Heavy']}
        icon={<WeightIcon className="w-4 h-4 text-slate-800" />}
      />
    </div>
  );
}