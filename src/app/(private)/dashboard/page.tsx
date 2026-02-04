'use client';

import { useAuth } from '@/context/AuthContext';
import { cookies } from 'next/headers';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardPage() {
  const { name, logout } = useAuth();
  const router = useRouter();

  return (
    <div className="p-6">
      <h1 className="text-2xl">Bem-vindo, {name} 👋</h1>
      <button
        onClick={() => {
          logout();
          router.push('/');
        }}
        className="mt-4 rounded bg-gray-700 px-4 py-2 hover:bg-gray-600"
      >
        Sair
      </button>
    </div>
  );
}
