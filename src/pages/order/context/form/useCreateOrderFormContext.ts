import { useFormContext } from 'react-hook-form';

import type { CreateOrderFormSchemaType } from '@/pages/order/constants/schema';

export const useCreateOrderFormContext = () => useFormContext<CreateOrderFormSchemaType>();
