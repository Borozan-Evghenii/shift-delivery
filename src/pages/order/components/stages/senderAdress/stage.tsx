import { PageLayout } from '@/components/layout';
import { Button, Input, Typography } from '@/components/ui';

import { useSenderAdressStage } from './hooks/useSendAdressStage';

export const SenderAdress = () => {
  const { state, functions } = useSenderAdressStage();

  return (
    <PageLayout>
      <Typography variant='title-h2'>Откуда забрать</Typography>
      <div className='flex w-[500px] flex-col gap-6'>
        <Input
          label='Улица'
          placeholder='Улица'
          {...state.createOrderForm.register('senderAddress.street')}
          error={!!state.createOrderForm.formState.errors?.senderAddress?.street}
          helpText={state.createOrderForm.formState.errors?.senderAddress?.street?.message}
        />
        <Input
          label='Номер дома'
          placeholder='Дом'
          {...state.createOrderForm.register('senderAddress.house')}
          error={!!state.createOrderForm.formState.errors?.senderAddress?.house}
          helpText={state.createOrderForm.formState.errors?.senderAddress?.house?.message}
        />
        <Input
          label='Номер квартиры'
          placeholder='Квартира'
          {...state.createOrderForm.register('senderAddress.apartment')}
          error={!!state.createOrderForm.formState.errors?.senderAddress?.apartment}
          helpText={state.createOrderForm.formState.errors?.senderAddress?.apartment?.message}
        />
        <Input
          label='Заметка'
          placeholder='Заметка для курьера'
          {...state.createOrderForm.register('senderAddress.comment')}
          error={!!state.createOrderForm.formState.errors?.senderAddress?.comment}
          helpText={state.createOrderForm.formState.errors?.senderAddress?.comment?.message}
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
              functions.goToReceivPoint();
            }}
          >
            Продолжить
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};
