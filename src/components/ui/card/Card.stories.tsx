import type { Meta, StoryObj } from '@storybook/react';

import '@/assets/styles/global.css';
import { Typography } from '../typography/Typography';

import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components / UI / Card',
  decorators: [
    (_, { props }) => (
      <div className='flex w-[700px] items-center justify-center'>
        <Card {...props}>
          <div className='flex w-full flex-col gap-4'>
            <Typography variant='paragraph-16-medium'>Получатель</Typography>
            <div className='flex items-center gap-6'>
              <div className='flex flex-col gap-0.5'>
                <Typography className='text-tertiary' variant='paragraph-12'>
                  ФИО
                </Typography>
                <Typography variant='paragraph-16'>Person Name</Typography>
              </div>
              <div className='flex flex-col gap-0.5'>
                <Typography className='text-tertiary' variant='paragraph-12'>
                  Телефон
                </Typography>
                <Typography variant='paragraph-16'>+37368349062</Typography>
              </div>
            </div>
          </div>
        </Card>
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Card>;
export const Default: Story = {
  args: {
    variant: 'filled'
  }
};

export const Outline: Story = {
  args: {
    variant: 'outline'
  }
};
