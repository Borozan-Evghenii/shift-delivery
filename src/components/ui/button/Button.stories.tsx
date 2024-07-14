import type { Meta } from '@storybook/react';

import { Button } from './Button.tsx';

const meta = {
  title: 'Design System / UI KIT / Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Button>;

export default meta;
// type Story = StoryObj<typeof meta>;

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  buttonType: 'primary',
  variant: 'contained',
  children: 'Button'
};

Secondary.args = {
  buttonType: 'secondary',
  variant: 'outlined',
  children: 'Button'
};
