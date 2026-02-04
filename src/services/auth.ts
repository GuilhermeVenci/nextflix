import { cookies } from 'next/headers';

// Pega token do cookie (SSR)
export async function getAuthToken() {
  const nextCookies = await cookies();
  return nextCookies.get('token')?.value || null;
}
