import { PageLayout } from '@/components/layout';
import { Button, Typography } from '@/components/ui';

import { useCheckInPage } from './hooks/useCheckInPage';

export const CheckIn = () => {
  const checkIn = useCheckInPage();

  return (
    <PageLayout>
      <Typography> Проверка данных заказа</Typography>
      <div className='flex w-[500px] flex-col gap-6'>d</div>
      <div className='flex w-[500px] gap-6 p-4'>
        <Button
          className='w-full'
          colour='secondary'
          variant='outline'
          onClick={() => checkIn.functions.goBack()}
        >
          Назад
        </Button>
        <Button className='w-full' colour='primary' variant='contained'>
          Отправить
        </Button>
      </div>
    </PageLayout>
  );
};
