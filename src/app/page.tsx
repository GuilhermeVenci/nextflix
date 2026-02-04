'use client ';
import MovieCard from '@/components/custom/MovieCard';
import Link from 'next/link';
import { useEffect } from 'react';

async function getPopularMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}&language=pt-BR`
    // { cache: 'force-cache' } // SSG
  );

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function HomePage() {
  useEffect(() => {
    const teste = getPopularMovies();
    console.log(teste);
  }, []);

  const data = await getPopularMovies();

  if (!data) {
    return (
      <div className="mt-12 text-center">
        <h2 className="mb-4 text-2xl font-semibold">
          😢 Não foi possível carregar os filmes populares
        </h2>
        <p className="mb-6 text-gray-400">
          Verifique sua conexão ou tente novamente mais tarde.
        </p>
        <Link
          href="/"
          className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
        >
          Tentar novamente
        </Link>
      </div>
    );
  }

  const movies = data.results;

  return (
    <div>
      <h2 className="mb-6 text-3xl font-semibold">Filmes Populares</h2>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {movies.map((movie: any) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
}
