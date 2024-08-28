import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import type { CreateOrderFormSchemaType } from '../constants/schema';
import { createOrderFormSchema } from '../constants/schema';

export const useOrderPage = () => {
  const createOrderForm = useForm<CreateOrderFormSchemaType>({
    resolver: zodResolver(createOrderFormSchema),
    mode: 'onChange'
  });

  const onSubmit = (data: CreateOrderFormSchemaType) => data;

  return {
    state: { form: { createOrderForm } },
    functions: { onSubmit }
  };
};
