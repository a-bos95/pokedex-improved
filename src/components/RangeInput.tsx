import { twMerge } from "tw-merge";
import { useState, useEffect } from "react";

interface Props {
  fromPlaceholder?: string;
  toPlaceholder?: string;
  onRangeChange: (range: { from: number; to: number }) => void;
  className?: string;
}

export default function RangeInput({
  fromPlaceholder = "387",
  toPlaceholder = "898",
  onRangeChange,
  className = ""
}: Props) {
  const [from, setFrom] = useState(fromPlaceholder);
  const [to, setTo] = useState(toPlaceholder);

  const handleFromChange = (value: string) => {
    setFrom(value);
    if (value && !isNaN(parseInt(value))) {
      onRangeChange({
        from: parseInt(value),
        to: parseInt(to) || parseInt(toPlaceholder)
      });
    }
  };

  const handleToChange = (value: string) => {
    setTo(value);
    if (value && !isNaN(parseInt(value))) {
      onRangeChange({
        from: parseInt(from) || parseInt(fromPlaceholder),
        to: parseInt(value)
      });
    }
  };

  // Initialize with default values
  useEffect(() => {
    onRangeChange({
      from: parseInt(fromPlaceholder),
      to: parseInt(toPlaceholder)
    });
  }, []);

  return (
    <div className={twMerge(`flex items-center gap-2 ${className}`)}>
      <span className="font-bold text-slate-900">from</span>
      <input 
        type="number" 
        className="w-16 max-w-[4rem] px-2 py-1 text-sm bg-transparent border border-neutral-500 rounded-lg"
        placeholder={fromPlaceholder}
        value={from}
        onChange={(e) => handleFromChange(e.target.value)}
        min={1}
        max={898}
      />
      <span className="font-bold text-slate-900">to</span>
      <input 
        type="number" 
        className="w-16 max-w-[4rem] px-2 py-1 text-sm bg-transparent border border-neutral-500 rounded-lg"
        placeholder={toPlaceholder}
        value={to}
        onChange={(e) => handleToChange(e.target.value)}
        min={1}
        max={898}
      />
    </div>
  );
} 