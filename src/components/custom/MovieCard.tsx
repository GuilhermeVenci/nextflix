import Link from 'next/link';

interface MovieCardProps {
  id: number;
  title: string;
  poster_path: string;
}

const MovieCard = ({ id, title, poster_path }: MovieCardProps) => {
  return (
    <Link
      href={`/movie/${id}`}
      className="cursor-pointer rounded bg-gray-800 shadow transition hover:scale-105"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="rounded-t"
      />
      <div className="p-2">
        <h3 className="truncate text-sm font-medium">{title}</h3>
      </div>
    </Link>
  );
};

export default MovieCard;
