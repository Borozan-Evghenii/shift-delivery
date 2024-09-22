import { Toast } from '@/components/ui';

import type { QueryProviderProps } from './query/QueryProvider';
import { QueryProvider } from './query/QueryProvider';
import { AuthProvider } from './session';

export interface ProvidersProps {
  children: React.ReactNode;
  query: Omit<QueryProviderProps, 'children'>;
  toast?: Omit<typeof Toast.Provider, 'children'>;
}

export const Provider = ({ children, query, toast }: ProvidersProps) => (
  <Toast.Provider {...toast}>
    <AuthProvider>
      <QueryProvider {...query}>{children}</QueryProvider>
    </AuthProvider>
    <Toast.Viewport />
  </Toast.Provider>
);
