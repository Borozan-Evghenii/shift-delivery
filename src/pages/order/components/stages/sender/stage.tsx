import { PageLayout } from '@/components/layout';
import { Button, Input, Typography } from '@/components/ui';

import { useSenderStage } from './hooks/useSenderStage';

export const Sender = () => {
  const receiver = useSenderStage();

  return (
    <PageLayout>
      <Typography variant='title-h2'>Отправитель</Typography>
      <div className='flex w-[500px] flex-col gap-6'>
        <Input
          autoComplete='off'
          label='Фамилия'
          placeholder='Фамилия'
          {...receiver.state.createOrderForm.register('sender.firstname')}
        />
        <Input
          autoComplete='off'
          label='Имя'
          placeholder='Имя'
          {...receiver.state.createOrderForm.register('sender.lastname')}
        />
        <Input
          autoComplete='off'
          label='Отчество'
          placeholder='Отчество (при наличии)'
          {...receiver.state.createOrderForm.register('sender.middlename')}
        />
        <Input
          autoComplete='off'
          label='Номер телефона'
          placeholder='Телефон'
          {...receiver.state.createOrderForm.register('sender.phone')}
        />
      </div>
      <div className='flex w-[500px] gap-6 p-4'>
        <Button
          className='w-full'
          colour='secondary'
          variant='outline'
          onClick={() => receiver.functions.goBack()}
        >
          Назад
        </Button>
        <Button
          className='w-full'
          colour='primary'
          variant='contained'
          onClick={() => receiver.functions.goToSenderPoint()}
        >
          Продолжить
        </Button>
      </div>
    </PageLayout>
  );
};
