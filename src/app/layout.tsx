import Header from '@/components/custom/Header';
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
      <body className="flex min-h-screen flex-col bg-gray-950 text-white">
        <Header />
        <main className="flex min-h-full flex-1 flex-col px-6 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
