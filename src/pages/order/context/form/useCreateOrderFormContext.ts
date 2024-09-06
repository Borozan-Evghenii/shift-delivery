import { useFormContext } from 'react-hook-form';

import type { OrderFormSchemaType } from '@/pages/order/constants/schema';

export const useCreateOrderFormContext = () => useFormContext<OrderFormSchemaType>();
