import React from 'react';

import type { User } from '../../../../@types/models';

import { UserContext } from './UserContext';

interface UserProviderProps {
  children: React.ReactNode;
  defaultUser?: User;
}

export const UserProvider = ({ children, defaultUser }: UserProviderProps) => {
  const [user, setUser] = React.useState<User>(defaultUser as User);

  const value = React.useMemo(() => ({ user, setUser }), [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
