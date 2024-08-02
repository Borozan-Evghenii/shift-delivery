import { QueryProvider } from './query/queryClientProvider';

interface ProviderProps {
  children: React.ReactNode;
}

export const Provider = ({ children }: ProviderProps) => <QueryProvider>{children}</QueryProvider>;
