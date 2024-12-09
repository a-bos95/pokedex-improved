interface Props {
  number: string;
  name: string;
  types: string[];
}

export default function PokemonCard({ number, name, types }: Props) {
  return (
    <div className="relative bg-white rounded-xl shadow-sm p-4 w-full">
      <div className="w-full flex justify-center">
        <div className="w-24 h-24 transform -translate-y-1/2">
          <img 
            src={`https://placehold.co/96x96`}
            alt={name}
            className="w-full h-full object-contain"
          />
        </div>
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
      {/* <img 
        src={`https://placehold.co/96x96`}
        alt={name}
        className="absolute -top-6 right-0 w-24 h-24 object-contain"
      /> */}
    </div>
  );
}