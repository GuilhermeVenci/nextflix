import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-gray-700 bg-gray-900 px-6 py-4">
      <h1 className="text-2xl font-bold text-red-500">Nextflix</h1>
      <nav>
        <ul className="flex gap-6 text-gray-300">
          <li>
            <Link href="/">Início</Link>
          </li>
          <li>
            <Link href="/favorites">Favoritos</Link>
          </li>
          <li>
            <Link
              href="/login"
              className="rounded bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-700"
            >
              Entrar
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
