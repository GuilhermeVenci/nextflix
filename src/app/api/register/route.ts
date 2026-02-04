import { NextResponse } from 'next/server';
import { users } from '@/lib/users';

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  const exists = users.find((u) => u.email === email);
  if (exists) {
    return NextResponse.json({ error: 'Email já existe' }, { status: 400 });
  }

  // Adiciona novo usuário fake
  const newUser = { id: users.length + 1, name, email, password };
  users.push(newUser);

  const response = NextResponse.json({ success: true });
  response.cookies.set('token', `fake-token-${newUser.id}`, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24,
  });
  response.cookies.set('name', `${newUser.name}`, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24,
  });
  return response;
}
