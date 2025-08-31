export default function LoadingHome() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Filmes Populares</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded shadow animate-pulse h-[300px]"
          />
        ))}
      </div>
    </div>
  );
}
