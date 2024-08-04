import { QueryProvider } from './query/QueryProvider';

interface ProviderProps {
  children: React.ReactNode;
}

export const Provider = ({ children }: ProviderProps) => <QueryProvider>{children}</QueryProvider>;
