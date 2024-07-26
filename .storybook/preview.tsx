import type { Preview } from '@storybook/react';
import React from 'react';
import '../src/assets/styles/global.css';

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className='flex h-[100vh] items-center justify-center'>
        <Story />
      </div>
    )
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },

  tags: ['autodocs']
};

export default preview;
