import { PageLayout } from '@/components/layout';
import { Button, Input, Typography } from '@/components/ui';

import { useSenderStage } from './hooks/useSenderStage';

export const Sender = () => {
  const { state, functions } = useSenderStage();

  return (
    <PageLayout>
      <Typography variant='title-h2'>Отправитель</Typography>
      <div className='flex w-[500px] flex-col gap-6'>
        <Input
          autoComplete='off'
          label='Фамилия'
          placeholder='Фамилия'
          {...state.createOrderForm.register('sender.firstname')}
          error={!!state.createOrderForm.formState.errors.sender?.firstname}
          helpText={state.createOrderForm.formState.errors?.sender?.firstname?.message}
        />
        <Input
          autoComplete='off'
          label='Имя'
          placeholder='Имя'
          {...state.createOrderForm.register('sender.lastname')}
          error={!!state.createOrderForm.formState.errors.sender?.lastname}
          helpText={state.createOrderForm.formState.errors?.sender?.lastname?.message}
        />
        <Input
          autoComplete='off'
          label='Отчество'
          placeholder='Отчество (при наличии)'
          {...state.createOrderForm.register('sender.middlename')}
          error={!!state.createOrderForm.formState.errors.sender?.middlename}
          helpText={state.createOrderForm.formState.errors?.sender?.middlename?.message}
        />
        <Input
          autoComplete='off'
          label='Номер телефона'
          placeholder='Телефон'
          {...state.createOrderForm.register('sender.phone')}
          error={!!state.createOrderForm.formState.errors.sender?.phone}
          helpText={state.createOrderForm.formState.errors?.sender?.phone?.message}
        />
      </div>
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
          onClick={() => functions.goToSenderPoint()}
        >
          Продолжить
        </Button>
      </div>
    </PageLayout>
  );
};
