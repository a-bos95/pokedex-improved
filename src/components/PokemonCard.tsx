interface Props {
  number: string;
  name: string;
  types: string[];
}

export default function PokemonCard({ number, name, types }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 w-[calc(33.33%-1rem)]">
      <div className="aspect-square bg-gray-100 rounded-lg mb-4">
        {/* Pokemon image will go here */}
      </div>
      <div className="space-y-2">
        <span className="text-sm text-gray-500">N°{number}</span>
        <h3 className="font-bold text-slate-900">{name}</h3>
        <div className="flex gap-2">
          {types.map(type => (
            <span key={type} className="px-3 py-1 text-sm font-medium bg-gray-100 rounded-full">
              {type}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
} 