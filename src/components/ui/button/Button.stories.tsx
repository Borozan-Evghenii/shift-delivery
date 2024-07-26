import type { Meta, StoryObj } from '@storybook/react';
import '@/assets/styles/global.css';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components / UI / Buttons',
  component: Button,
  args: {
    children: 'Button'
  }
};

export default meta;
type Story = StoryObj<typeof Button>;
export const PrimaryContained: Story = {
  args: {
    colour: 'primary',
    variant: 'contained'
  }
};
export const PrimaryText: Story = {
  args: {
    colour: 'primary',
    variant: 'text'
  }
};
export const PrimaryLink: Story = {
  args: {
    colour: 'primary',
    variant: 'link'
  }
};

export const SecondaryOutline: Story = {
  args: {
    colour: 'secondary',
    variant: 'outline'
  }
};
export const SecondaryText: Story = {
  args: {
    colour: 'secondary',
    variant: 'text'
  }
};
export const SecondaryLink: Story = {
  args: {
    colour: 'secondary',
    variant: 'link'
  }
};
export const TertiaryLink: Story = {
  args: {
    colour: 'tertiary',
    variant: 'link'
  }
};
