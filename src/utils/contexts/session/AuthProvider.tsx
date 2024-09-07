import React from 'react';

import { LOCAL_STORAGE } from '@/utils/constants';

import { AuthContext } from './AuthContext';

export interface SessionProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: SessionProviderProps) => {
  const token = localStorage.getItem(LOCAL_STORAGE.TOKEN);

  const [isAuth, setIsAuth] = React.useState<boolean>(!!token);

  const value = React.useMemo(
    () => ({
      isAuth,
      setIsAuth: (value: boolean) => {
        if (!value) {
          setIsAuth(value);
          localStorage.removeItem(LOCAL_STORAGE.TOKEN);
        } else {
          setIsAuth(value);
        }
      }
    }),
    [isAuth]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
