import { PageLayout } from '@/components/layout';
import { Button, Input, Typography } from '@/components/ui';

import { useSendPointPage } from './hooks/useSendPointPage';

export const SendPoint = () => {
  const sendPoint = useSendPointPage();

  return (
    <PageLayout>
      <Typography variant='title-h2'>Откуда забрать</Typography>
      <div className='flex w-[500px] flex-col gap-6'>
        <Input
          label='Улица'
          placeholder='Улица'
          {...sendPoint.state.createOrderForm.register('senderAdress.street')}
          error={!!sendPoint.state.createOrderForm.formState.errors?.senderAdress?.street}
          helpText={sendPoint.state.createOrderForm.formState.errors?.senderAdress?.street?.message}
        />
        <Input
          label='Номер дома'
          placeholder='Дом'
          {...sendPoint.state.createOrderForm.register('senderAdress.house')}
          error={!!sendPoint.state.createOrderForm.formState.errors?.senderAdress?.house}
          helpText={sendPoint.state.createOrderForm.formState.errors?.senderAdress?.house?.message}
        />
        <Input
          label='Номер квартиры'
          placeholder='Квартира'
          {...sendPoint.state.createOrderForm.register('senderAdress.apartament')}
          error={!!sendPoint.state.createOrderForm.formState.errors?.senderAdress?.apartament}
          helpText={
            sendPoint.state.createOrderForm.formState.errors?.senderAdress?.apartament?.message
          }
        />
        <Input
          label='Заметка'
          placeholder='Заметка для курьера'
          {...sendPoint.state.createOrderForm.register('senderAdress.comment')}
          error={!!sendPoint.state.createOrderForm.formState.errors?.senderAdress?.comment}
          helpText={
            sendPoint.state.createOrderForm.formState.errors?.senderAdress?.comment?.message
          }
        />
        <div className='flex w-[500px] gap-6 p-4'>
          <Button
            className='w-full'
            colour='secondary'
            variant='outline'
            onClick={() => sendPoint.functions.goBack()}
          >
            Назад
          </Button>
          <Button
            className='w-full'
            colour='primary'
            variant='contained'
            onClick={() => {
              sendPoint.functions.goToReceivPoint();
            }}
          >
            Продолжить
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};
