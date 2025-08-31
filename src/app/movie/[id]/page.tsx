async function getMovie(id: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_KEY}&language=pt-BR`,
    { cache: 'no-store' } // SSR -> sempre pega do servidor
  );

  if (!res.ok) throw new Error('Erro ao carregar detalhes do filme');

  return res.json();
}

export default async function MoviePage({
  params,
}: {
  params: { id: string };
}) {
  const movie = await getMovie(params.id);

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
      <p className="text-gray-400 mb-6">{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded shadow-lg mb-6"
      />
      <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white font-medium">
        ⭐ Favoritar
      </button>
    </div>
  );
}
