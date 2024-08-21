import { useForm } from 'react-hook-form';

export const useOrderPage = () => {
  const creteOrderForm = useForm();

  return {
    state: { form: { creteOrderForm } }
  };
};
