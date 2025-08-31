import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nextflix',
  description: 'Workshop de Next.js - App de Filmes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-950 text-white min-h-screen">
        <header className="bg-gray-900 border-b border-gray-700 px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-red-500">Nextflix</h1>
          <nav>
            <ul className="flex gap-4 text-gray-300">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/favorites">Favoritos</a>
              </li>
              <li>
                <a href="/login">Entrar</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
