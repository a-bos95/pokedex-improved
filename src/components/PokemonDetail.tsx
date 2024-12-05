export default function PokemonDetail() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
      <div className="aspect-square bg-gray-100 rounded-lg mb-6">
        {/* Pokemon image will go here */}
      </div>
      <div className="space-y-4">
        <div>
          <span className="text-sm text-gray-500">N°387</span>
          <h2 className="text-2xl font-bold text-slate-900">Turtwig</h2>
        </div>
        <div className="flex gap-2">
          <span className="px-4 py-1 text-sm font-medium bg-gray-100 rounded-full">
            Grass
          </span>
        </div>
        <div className="space-y-2">
          <h3 className="font-bold text-slate-800">Pokedex Entry</h3>
          <p className="text-sm text-slate-600">
            Made from soil, the shell on its back hardens when it drinks water. It lives along lakes.
          </p>
        </div>
      </div>
    </div>
  );
} 