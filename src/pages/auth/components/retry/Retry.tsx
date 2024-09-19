import React from 'react';

import { Typography } from '@/components/ui';

interface RetryProps {
  retryDelay: number;
  children: React.ReactNode;
}

export const Retry = ({ retryDelay, children }: RetryProps) => {
  const [time, setTime] = React.useState(Math.floor(retryDelay / 1000));

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    if (time === 0) {
      setTime(0);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [time]);

  return (
    <Typography color='tertiary' variant='paragraph-14'>
      {!(time === 0) && `Отправить код повторно через ${time} сек`}
      {time === 0 && children}
    </Typography>
  );
};
