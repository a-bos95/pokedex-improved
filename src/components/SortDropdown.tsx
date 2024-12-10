import { useState, useRef, useEffect } from 'react';
import { twMerge } from 'tw-merge';
import { ArrowIcon } from './Icons';

interface SortDropdownProps {
  className?: string;
}

export default function SortDropdown({ className }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Ascending');
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
    <div ref={dropdownRef} className={twMerge(`relative ${className}`)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center min-w-32 gap-1"
      >
        <span className="font-bold text-slate-900">{selected}</span>
        <ArrowIcon className={`w-5 h-5 text-slate-900 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-32 bg-white rounded-lg shadow-lg pb-1 z-10">
          {['Ascending', 'Descending'].map((option) => (
            <button
              key={option}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left hover:bg-gray-50 ${
                selected === option ? 'font-bold text-slate-900' : 'text-slate-600'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
