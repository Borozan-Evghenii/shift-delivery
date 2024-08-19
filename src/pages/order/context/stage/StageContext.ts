import React from 'react';

export type Stage =
  | 'deliveryMethod'
  | 'sender'
  | 'receiver'
  | 'sendPoint'
  | 'receivPoint'
  | 'paymentMethod'
  | 'CheckIn';

export interface StageContextProps {
  stage: Stage;
  setStage: (stage: Stage) => void;
}

export const StageContext = React.createContext<StageContextProps>({
  stage: 'deliveryMethod',
  setStage: () => {}
});
