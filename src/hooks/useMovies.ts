'use client';

import { useState } from 'react';
import { searchMovies } from '@/services/tmdb';

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  release_date: string;
}

export function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function search(query: string) {
    setLoading(true);
    setError(null);
    try {
      const data = await searchMovies(query);
      setMovies(data.results || []);
    } catch (err) {
      setError('Erro ao buscar filmes');
    } finally {
      setLoading(false);
    }
  }

  return { movies, loading, error, search };
}
