interface TagProps {
  key: number;
  label: string;
}

export default function CardTag({ key, label }: TagProps) {
  return (
    <span key={key} className="px-3 py-1 text-sm font-medium bg-gray-100 rounded-full">
      {label}
    </span>
  )
}
