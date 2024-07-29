import type { Meta, StoryObj } from '@storybook/react';
import '@/assets/styles/global.css';

import { Tab } from './Tab';

const meta: Meta<typeof Tab> = {
  title: 'Components / UI / Tab'
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  decorators: [
    () => (
      <div className='flex w-[600px] flex-col items-center justify-center'>
        <Tab.Root defaultValue='1'>
          <Tab.List>
            <Tab.Trigger value='1'>Label 1</Tab.Trigger>
            <Tab.Trigger value='2'>Label 2</Tab.Trigger>
          </Tab.List>
        </Tab.Root>
      </div>
    )
  ]
};

export const ThreeTabs: Story = {
  decorators: [
    () => (
      <div className='flex w-[600px] flex-col items-center justify-center'>
        <Tab.Root defaultValue='1'>
          <Tab.List>
            <Tab.Trigger value='1'>Label 1</Tab.Trigger>
            <Tab.Trigger value='2'>Label 2</Tab.Trigger>
            <Tab.Trigger value='3'>Label 3</Tab.Trigger>
          </Tab.List>
        </Tab.Root>
      </div>
    )
  ]
};
