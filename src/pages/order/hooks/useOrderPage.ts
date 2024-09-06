import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import type { OrderFormSchemaType } from '../constants/schema';
import { createOrderFormSchema } from '../constants/schema';

export const useOrderPage = () => {
  const createOrderForm = useForm<OrderFormSchemaType>({
    resolver: zodResolver(createOrderFormSchema),
    mode: 'onChange',
    defaultValues: {
      payer: 'SENDER'
    }
  });

  return {
    state: { form: { createOrderForm } }
  };
};
