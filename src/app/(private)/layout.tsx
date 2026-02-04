'use client';

import { AuthProvider } from '@/context/AuthContext';

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthProvider>{children}</AuthProvider>;
}
