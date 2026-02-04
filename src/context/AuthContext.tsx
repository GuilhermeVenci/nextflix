'use client';
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

interface AuthContextType {
  token: string | null;
  name: string | null;
  setToken: (t: string | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);

  // Inicializa token no client, chamando endpoint SSR
  useEffect(() => {
    async function fetchToken() {
      const res = await fetch('/api/me');
      const data = await res.json();
      setToken(data.token);
      setName(data.name);
    }
    fetchToken();
  }, []);

  const logout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    setToken(null);
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider value={{ token, setToken, name, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
