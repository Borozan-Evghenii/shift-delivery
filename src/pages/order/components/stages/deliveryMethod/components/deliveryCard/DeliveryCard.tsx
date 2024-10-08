import React from 'react';

import { IconAirplane, IconBus } from '@/components/icons/svg';
import { Typography } from '@/components/ui';
import { beautifyPrice } from '@/utils/helper/beutifyPrice/beutifyPrice';

import type { DeliveryOption } from '../../../../../../../../@types/models';

interface DeliveryCardProps extends React.ComponentPropsWithoutRef<'div'> {
  data: DeliveryOption;
}

export const DeliveryCard = ({ data, ...props }: DeliveryCardProps) => (
  <div
    className='group flex w-full items-start gap-4 rounded-3xl border border-extralight p-4 hover:cursor-pointer hover:bg-brand'
    {...props}
  >
    <div className='flex items-start justify-center rounded-full bg-secondary p-3 group-hover:bg-white'>
      {data.type === 'DEFAULT' ? (
        <IconBus className='text-tertiary group-hover:text-brand' />
      ) : (
        <IconAirplane className='text-tertiary group-hover:text-brand' />
      )}
    </div>
    <div className='flex flex-col items-start gap-6'>
      <div className='flex flex-col gap-2'>
        <Typography className='text-tertiary group-hover:text-white' variant='paragraph-12'>
          {data.name}
        </Typography>
        <Typography className='group-hover:text-white' variant='title-h3'>
          {`${beautifyPrice(data.price)} ₽`}
        </Typography>
      </div>
      <Typography className='text-tertiary group-hover:text-white' variant='paragraph-12'>
        {data.days > 1 ? `${data.days} рабочих дней` : `${data.days} рабочий день`}
      </Typography>
    </div>
  </div>
);
