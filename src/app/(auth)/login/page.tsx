'use client';

import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      window.location.href = '/dashboard';
    } else {
      const data = await res.json();
      setError(data.error || 'Erro no login');
    }
  }

  return (
    <div className="flex flex-1 items-center justify-center">
      <Card className="flex min-w-sm flex-col gap-8 bg-transparent p-6">
        <h2 className="text-3xl">Acessar conta</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" className="mt-6">
            Entrar
          </Button>
        </form>
        <span className="text-sm font-normal !text-gray-400">
          Ainda não tem uma conta?{' '}
          <Link href="/register" className="!text-white">
            Registre-se
          </Link>
        </span>
      </Card>
    </div>
  );
}
