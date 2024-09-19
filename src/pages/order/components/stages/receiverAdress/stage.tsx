import { PageLayout } from '@/components/layout';
import { Button, Input, Typography } from '@/components/ui';

import { useReceiverAdressStage } from './hooks/useReceiverAdressStage';

export const ReceiverAdress = () => {
  const { state, functions } = useReceiverAdressStage();

  return (
    <PageLayout>
      <Typography variant='title-h2'>Куда доставить</Typography>
      <div className='flex w-[500px] flex-col gap-6'>
        <Input
          label='Улица'
          placeholder='Улица'
          {...state.createOrderForm.register('receiverAddress.street')}
          error={!!state.createOrderForm.formState.errors?.receiverAddress?.street}
          helpText={state.createOrderForm.formState.errors?.receiverAddress?.street?.message}
        />
        <Input
          label='Номер дома'
          placeholder='Дом'
          {...state.createOrderForm.register('receiverAddress.house')}
          error={!!state.createOrderForm.formState.errors?.receiverAddress?.house}
          helpText={state.createOrderForm.formState.errors?.receiverAddress?.house?.message}
        />
        <Input
          label='Номер квартиры'
          placeholder='Квартира'
          {...state.createOrderForm.register('receiverAddress.apartment')}
          error={!!state.createOrderForm.formState.errors?.receiverAddress?.apartment}
          helpText={state.createOrderForm.formState.errors?.receiverAddress?.apartment?.message}
        />
        <Input
          label='Заметка'
          placeholder='Заметка для курьера'
          {...state.createOrderForm.register('receiverAddress.comment')}
          error={!!state.createOrderForm.formState.errors?.receiverAddress?.comment}
          helpText={state.createOrderForm.formState.errors?.receiverAddress?.comment?.message}
        />
        <div className='flex w-[500px] gap-6 p-4'>
          <Button
            className='w-full'
            colour='secondary'
            variant='outline'
            onClick={() => functions.goBack()}
          >
            Назад
          </Button>
          <Button
            className='w-full'
            colour='primary'
            disabled={!state.isStageValid()}
            variant='contained'
            onClick={() => {
              functions.goToPaymentMethod();
            }}
          >
            Продолжить
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};
