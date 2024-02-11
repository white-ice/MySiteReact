import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import React from 'react';


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [(Story) => (
    <StyleDecorator theme={Theme.LIGHT}>
      <Story />
    </StyleDecorator>
  )],
};

export default preview;
