import React from 'react';
import type { UseFormReturn } from 'react-hook-form';
import { FormProvider } from 'react-hook-form';

import type { CreateOrderFormSchemaType } from './constants/schema';
import type { StageProviderProps } from './context/stage';
import { StageProvider } from './context/stage';

interface ProviderProps {
  children: React.ReactNode;
  stage?: Omit<StageProviderProps, 'children'>;
  methods: Omit<UseFormReturn<CreateOrderFormSchemaType>, 'children'>;
}

export const Provider = ({ children, stage, methods }: ProviderProps) => (
  <FormProvider {...methods}>
    <StageProvider {...stage}>{children}</StageProvider>
  </FormProvider>
);
