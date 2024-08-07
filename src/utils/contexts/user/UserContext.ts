import React from 'react';

import type { User } from '../../../../@types/models';

export interface UserContextProps {
  user: User;
  setUser: (user: User) => void;
}

export const UserContext = React.createContext<UserContextProps>({
  user: undefined!,
  setUser: () => {}
});
