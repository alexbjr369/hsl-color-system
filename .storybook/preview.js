import { defineCustomElements } from '../dist/esm/loader';

// medgrupo
import '../styles/medgrupo.css';

// themes
import '../styles/themes/default.css';

// schemes
import '../styles/schemes/default.css';
import '../styles/schemes/dark.css';
import '../styles/schemes/light.css';

defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
