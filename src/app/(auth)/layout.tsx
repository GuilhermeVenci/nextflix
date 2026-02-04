import { AuthProvider } from '@/context/AuthContext';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="flex h-full flex-1 flex-col items-center justify-center">
        {children}
      </div>
    </AuthProvider>
  );
}
