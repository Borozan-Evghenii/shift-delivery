import { Link } from '@tanstack/react-router';

import { PageLayout } from '@/components/layout';
import { Card, Typography } from '@/components/ui';
import { ROUTE } from '@/utils/constants';

import { useHistoryPage } from './hooks/useHistoryPage';
import { HistoryLoading } from './loading';

export const HistoryPage = () => {
  const { state } = useHistoryPage();

  if (!state.orders.isSuccess) {
    return <HistoryLoading />;
  }

  return (
    <PageLayout>
      <Typography variant='title-h2'>История</Typography>
      {state.orders.data?.data.orders.map((order, index) => (
        <Card key={order._id} variant='outline'>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-1'>
              <Typography variant='paragraph-12'>Номер заказа</Typography>
              <Typography variant='paragraph-16'>{index + 1}</Typography>
            </div>
            <div className='flex flex-col gap-1'>
              <Typography variant='paragraph-12'>Статус</Typography>
              <Typography variant='paragraph-16'>Заказ доставлен</Typography>
            </div>
            <div className='flex flex-col gap-1'>
              <Typography variant='paragraph-12'>Адрес доставки</Typography>
              <Typography variant='paragraph-16'>
                {`Россия , г. ${order.receiverPoint.name} ул. ${order.receiverAddress.street}, д. ${order.receiverAddress.house}`}
              </Typography>
            </div>
            <div className='flex flex-col gap-1'>
              <Typography variant='paragraph-12'>Тип доставки</Typography>
              <Typography variant='paragraph-16'>{order.payer}</Typography>
            </div>
            <Link className='paragraph-16-underline' to={`/${ROUTE.HISTORY}/${order?._id}`}>
              Подробнее
            </Link>
          </div>
        </Card>
      ))}
    </PageLayout>
  );
};
