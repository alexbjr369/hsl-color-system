import { defineCustomElements } from '../dist/esm/loader';

// storybook
import '../src/stories/color-system.stories.css';

// color system
import '../styles/default.css';

// schemes
import '../styles/schemes/product-01/light.css';
import '../styles/schemes/product-01/dark.css';

import '../styles/schemes/product-02/light.css';
import '../styles/schemes/product-02/dark.css';

// themes
import '../styles/themes/product-01.css';
import '../styles/themes/product-02.css';

defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Main Colors', 'Neutral Colors', 'Feedback Colors'],
    },
  },
  themes: {
    target: 'root',
    onChange: (themeName) => {
      document.querySelector('iframe').contentWindow.document.querySelector('.snipet__value--class').textContent = `${themeName.class.join(' ')}`;
    },
  },
};
