import type { Meta, StoryObj } from '@storybook/react';
import '@/assets/styles/global.css';

import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components / UI / Select',
  decorators: [
    () => (
      <div className='flex w-[500px] flex-col items-center justify-center'>
        <Select.Root>
          <Select.Label>Select category</Select.Label>
          <Select.Trigger>
            <Select.Value placeholder='Select a fruit…' />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value='1'>Item 1</Select.Item>
            <Select.Item value='2'>Item 2</Select.Item>
            <Select.Item value='3'>Item 3</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Select>;
export const Default: Story = {
  args: {
    // label: 'Label',
    // error: false,
    // helpText: 'Hint message goes here'
  }
};
