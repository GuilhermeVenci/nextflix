import Link from 'next/link';

async function getPopularMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}&language=pt-BR`,
    { cache: 'force-cache' } // SSG
  );

  if (!res.ok) throw new Error('Falha ao carregar filmes populares');

  return res.json();
}

export default async function HomePage() {
  const data = await getPopularMovies();
  const movies = data.results;

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Filmes Populares</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {movies.map((movie: any) => (
          <Link
            key={movie.id}
            href={`/movie/${movie.id}`}
            className="bg-gray-800 rounded shadow hover:scale-105 transition cursor-pointer"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded-t"
            />
            <div className="p-2">
              <h3 className="text-sm font-medium truncate">{movie.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
