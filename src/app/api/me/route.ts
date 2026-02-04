import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  const nextCookies = await cookies();
  const token = nextCookies.get('token')?.value || null;
  const name = nextCookies.get('name')?.value || null;
  return NextResponse.json({ token, name });
}
