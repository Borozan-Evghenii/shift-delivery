import type { Meta, StoryObj } from '@storybook/react';

import '@/assets/styles/global.css';
import { RadioGroup } from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components / UI / Radio Group',
  decorators: [
    () => (
      <div className='flex w-[500px] flex-col items-center justify-center'>
        <RadioGroup.Root>
          <RadioGroup.Item label='Some' value='value' />
        </RadioGroup.Root>
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;
export const Default: Story = {
  args: {}
};
