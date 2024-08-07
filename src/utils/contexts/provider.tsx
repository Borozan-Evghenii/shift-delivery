import { QueryProvider } from './query/QueryProvider';
import type { UserContextProps } from './user';
import { UserProvider } from './user';

interface ProviderProps {
  children: React.ReactNode;
  user: Omit<UserContextProps, 'children'>;
}

export const Provider = ({ children, user }: ProviderProps) => (
  <UserProvider {...user}>
    <QueryProvider>{children}</QueryProvider>
  </UserProvider>
);
