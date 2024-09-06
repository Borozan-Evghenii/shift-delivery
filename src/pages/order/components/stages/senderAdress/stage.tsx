import { PageLayout } from '@/components/layout';
import { Button, Input, Typography } from '@/components/ui';

import { useSenderAdressStage } from './hooks/useSendAdressStage';

export const SenderAdress = () => {
  const senderAddress = useSenderAdressStage();

  return (
    <PageLayout>
      <Typography variant='title-h2'>Откуда забрать</Typography>
      <div className='flex w-[500px] flex-col gap-6'>
        <Input
          label='Улица'
          placeholder='Улица'
          {...senderAddress.state.createOrderForm.register('senderAddress.street')}
          error={!!senderAddress.state.createOrderForm.formState.errors?.senderAddress?.street}
          helpText={
            senderAddress.state.createOrderForm.formState.errors?.senderAddress?.street?.message
          }
        />
        <Input
          label='Номер дома'
          placeholder='Дом'
          {...senderAddress.state.createOrderForm.register('senderAddress.house')}
          error={!!senderAddress.state.createOrderForm.formState.errors?.senderAddress?.house}
          helpText={
            senderAddress.state.createOrderForm.formState.errors?.senderAddress?.house?.message
          }
        />
        <Input
          label='Номер квартиры'
          placeholder='Квартира'
          {...senderAddress.state.createOrderForm.register('senderAddress.apartment')}
          error={!!senderAddress.state.createOrderForm.formState.errors?.senderAddress?.apartment}
          helpText={
            senderAddress.state.createOrderForm.formState.errors?.senderAddress?.apartment?.message
          }
        />
        <Input
          label='Заметка'
          placeholder='Заметка для курьера'
          {...senderAddress.state.createOrderForm.register('senderAddress.comment')}
          error={!!senderAddress.state.createOrderForm.formState.errors?.senderAddress?.comment}
          helpText={
            senderAddress.state.createOrderForm.formState.errors?.senderAddress?.comment?.message
          }
        />
        <div className='flex w-[500px] gap-6 p-4'>
          <Button
            className='w-full'
            colour='secondary'
            variant='outline'
            onClick={() => senderAddress.functions.goBack()}
          >
            Назад
          </Button>
          <Button
            className='w-full'
            colour='primary'
            disabled={!senderAddress.state.isStageValid()}
            variant='contained'
            onClick={() => {
              senderAddress.functions.goToReceivPoint();
            }}
          >
            Продолжить
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};
