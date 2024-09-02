import '@/assets/styles/global.css';

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Button } from '../button/Button';
import { Typography } from '../typography/Typography';

import { Modal } from './Modal';

const ModalPalyground = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <body>
      <div className='flex w-[300px] items-center justify-center'>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <div className='flex flex-col items-center'>
            <div className='flex flex-col gap-4'>
              <Typography className='text-center' variant='title-h3'>
                Заявка отправлена
              </Typography>
              <Typography>Вы можете оплатить ваш заказ в разделе «Профиль»</Typography>
            </div>
            <Button className='mt-10'>Посмотреть статус</Button>
          </div>
        </Modal>
      </div>
    </body>
  );
};
const meta: Meta<typeof Modal> = {
  title: 'Components / UI / Modal',
  component: Modal,
  decorators: [() => <ModalPalyground />]
};

export default meta;
type Story = StoryObj<typeof Modal>;
export const Default: Story = {};
