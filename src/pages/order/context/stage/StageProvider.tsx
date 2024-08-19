import React, { useMemo } from 'react';

import type { Stage } from './StageContext';
import { StageContext } from './StageContext';

export interface StageProviderProps {
  children: React.ReactNode;
  defaultStage?: Stage;
}

export const StageProvider = ({
  children,
  defaultStage = 'deliveryMethod'
}: StageProviderProps) => {
  const [stage, setStage] = React.useState<Stage>(defaultStage);

  const value = useMemo(
    () => ({
      stage,
      setStage
    }),
    [stage]
  );

  return <StageContext.Provider value={value}>{children}</StageContext.Provider>;
};
