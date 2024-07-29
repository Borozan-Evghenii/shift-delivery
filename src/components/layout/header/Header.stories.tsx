import type { Meta, StoryObj } from '@storybook/react';

import '@/assets/styles/global.css';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components / Layout / Header',
  component: Header,
  decorators: [
    (Story) => (
      <div className='h-[100vh] w-full'>
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};
