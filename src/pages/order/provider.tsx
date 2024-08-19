import React from 'react';

import type { StageProviderProps } from './context/stage';
import { StageProvider } from './context/stage';

interface ProviderProps {
  children: React.ReactNode;
  stage?: Omit<StageProviderProps, 'children'>;
}

export const Provider = ({ children, stage }: ProviderProps) => (
  <StageProvider {...stage}>{children}</StageProvider>
);
