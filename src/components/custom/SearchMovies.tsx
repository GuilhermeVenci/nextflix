"use client";

import { useState, useRef, useEffect } from "react";
import MovieCard from "./MovieCard";
import Button from "../ui/Button";
import Input from "../ui/Input";

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
}

export default function SearchMovies() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResults([]);

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=pt-BR&sort_by=popularity.desc&query=${query}`
      );
      const data = await res.json();

      setResults(data.results || []);
      setOpen(true);
    } catch (err) {
      console.error("Erro ao buscar filmes", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mb-12 relative" ref={wrapperRef}>
      <form onSubmit={handleSearch} className="flex gap-2 mb-6">
        <Input
          aria-label="Buscar filmes"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar filme..."
          className="flex-1"
        />
        <Button type="submit" variant="primary">
          Buscar
        </Button>
      </form>

      {loading && <p className="text-gray-400">🔍 Carregando...</p>}

      {open && (
        <div
          role="listbox"
          className="absolute z-40 w-full bg-gray-900 p-4 rounded-lg max-h-[50dvh] overflow-y-auto shadow-lg"
        >
          {results.length === 0 && !loading ? (
            <p className="text-gray-400">Nenhum filme encontrado.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {results.map((movie) => (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  poster_path={movie.poster_path || ""}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
