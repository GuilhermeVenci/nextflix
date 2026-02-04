const API_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.TMDB_KEY;

async function fetchFromTMDB(endpoint: string, options?: RequestInit) {
  const res = await fetch(`${API_URL}${endpoint}&api_key=${API_KEY}`, {
    ...options,
  });

  if (!res.ok) {
    throw new Error(`Erro na API TMDB: ${res.statusText}`);
  }

  return res.json();
}

// Filmes populares (SSG)
export async function getPopularMovies() {
  return fetchFromTMDB(`/movie/popular?language=pt-BR&page=1`, {
    cache: "force-cache", // SSG
  });
}

// Detalhe de filme (SSR)
export async function getMovieById(id: string) {
  return fetchFromTMDB(`/movie/${id}?language=pt-BR`, {
    cache: "no-store", // SSR
  });
}

// Busca de filmes (CSR → usaremos com hook)
export async function searchMovies(query: string) {
  return fetchFromTMDB(`/search/movie?language=pt-BR&query=${query}`, {
    cache: "no-store",
  });
}
