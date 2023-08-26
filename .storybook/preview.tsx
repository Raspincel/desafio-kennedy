import React from 'react'
import type { Preview } from '@storybook/react';
import { GlobalStyles } from '../src/styles/globalStyle'

import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { SearchProvider } from '../src/contexts/search'
import { ToolProvider } from '../src/contexts/tool'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    // Adds global styles and theme switching support.
    withThemeFromJSXProvider({
      GlobalStyles,
    }),
    (Story) => (
          <ToolProvider>
            <SearchProvider>
              <Story/>
            </SearchProvider>
          </ToolProvider>
        )
  ],
};

export default preview;
