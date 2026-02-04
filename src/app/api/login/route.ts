import { NextResponse } from 'next/server';
import { users } from '@/lib/users';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return NextResponse.json(
      { error: 'Credenciais inválidas' },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set('token', `fake-token-${user.id}`, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24,
  });
  response.cookies.set('name', `${user.name}`, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24,
  });

  return response;
}
