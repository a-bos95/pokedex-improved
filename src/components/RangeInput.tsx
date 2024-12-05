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
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-sm text-gray-500">from</span>
      <input 
        type="number" 
        className="w-20 px-3 py-1 text-sm bg-white rounded-lg shadow-sm"
        placeholder={fromPlaceholder}
        onChange={(e) => onFromChange?.(e.target.value)}
      />
      <span className="text-sm text-gray-500">to</span>
      <input 
        type="number" 
        className="w-20 px-3 py-1 text-sm bg-white rounded-lg shadow-sm"
        placeholder={toPlaceholder}
        onChange={(e) => onToChange?.(e.target.value)}
      />
    </div>
  );
} 