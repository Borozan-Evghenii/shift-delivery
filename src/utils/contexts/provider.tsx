import type { QueryProviderProps } from './query/QueryProvider';
import { QueryProvider } from './query/QueryProvider';
import { AuthProvider } from './session';

export interface ProvidersProps {
  children: React.ReactNode;
  query: Omit<QueryProviderProps, 'children'>;
}

export const Provider = ({ children, query }: ProvidersProps) => (
  <AuthProvider>
    <QueryProvider {...query}>{children}</QueryProvider>
  </AuthProvider>
);
