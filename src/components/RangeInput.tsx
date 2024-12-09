import { twMerge } from "tw-merge";

interface Props {
  fromPlaceholder?: string;
  toPlaceholder?: string;
  onFromChange?: (value: string) => void;
  onToChange?: (value: string) => void;
  className?: string;
}

export default function RangeInput({
  fromPlaceholder = "387",
  toPlaceholder = "898",
  onFromChange,
  onToChange,
  className = ""
}: Props) {
  return (
    <div className={twMerge(`flex items-center gap-2 ${className}`)}>
      <span className="font-bold text-slate-900">from</span>
      <input 
        type="number" 
        className="w-16 max-w-[4rem] px-2 py-1 text-sm bg-transparent border border-neutral-500 rounded-lg"
        placeholder={fromPlaceholder}
        onChange={(e) => onFromChange?.(e.target.value)}
      />
      <span className="font-bold text-slate-900">to</span>
      <input 
        type="number" 
        className="px-2 py-1 text-sm bg-transparent border border-neutral-500 rounded-lg"
        placeholder={toPlaceholder}
        onChange={(e) => onToChange?.(e.target.value)}
      />
    </div>
  );
} 