import type { Meta, StoryObj } from '@storybook/react';

import '@/assets/styles/global.css';
import { CheckBox } from './CheckBox';

const meta: Meta<typeof CheckBox> = {
  title: 'Components / UI / CheckBox',
  decorators: [
    () => (
      <div className='flex w-[500px] flex-col items-center justify-center'>
        <CheckBox.Root>
          <CheckBox.Indicator />
        </CheckBox.Root>
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof CheckBox>;
export const Default: Story = {
  args: {}
};
