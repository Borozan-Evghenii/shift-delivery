import type { Meta, StoryObj } from '@storybook/react';
import '@/assets/styles/global.css';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components / UI / Input',
  component: Input,
  args: {
    placeholder: 'Input Default'
  },
  decorators: [
    (Story) => (
      <div className='flex w-[300px] items-center justify-center'>
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Input>;
export const Default: Story = {
  args: {
    label: 'Label',
    error: false,
    helpText: 'Hint message goes here'
  }
};

export const Error: Story = {
  args: {
    label: 'Label',
    error: true,
    helpText: 'Error message goes here'
  }
};

export const Disabled: Story = {
  args: {
    label: 'Label',
    error: false,
    helpText: 'Error message goes here',
    disabled: true
  }
};
