import type { Meta, StoryObj } from '@storybook/react';
import '@/assets/styles/global.css';

import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components / UI / Typography',
  component: Typography,
  args: {
    children: 'Рассчитать доставку'
  },
  decorators: [
    (Story) => (
      <div className='flex w-[600px] flex-col items-center justify-center'>
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    variant: 'title-h1',
    tag: 'h5'
  }
};
