import { defineCustomElements } from '../dist/esm/loader';

// storybook
import '../src/stories/color-system.stories.css';

// color system
import '../styles/default.css';

// schemes
import '../styles/schemes/default/light.css';
import '../styles/schemes/default/dark.css';

import '../styles/schemes/product-01/light.css';
import '../styles/schemes/product-01/dark.css';

import '../styles/schemes/product-02/light.css';
import '../styles/schemes/product-02/dark.css';

// themes
import '../styles/themes/default.css';
import '../styles/themes/product-01.css';
import '../styles/themes/product-02.css';

defineCustomElements();

// application brand
// class="med-default-theme" data-med-color-scheme='dark'

// application product 01
// class="med-default-theme med-product-01-theme" data-med-color-scheme='dark'

// application product 02
// class="med-default-theme med-product-02-theme" data-med-color-scheme='dark'

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
