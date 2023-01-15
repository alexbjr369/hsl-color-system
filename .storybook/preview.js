import { defineCustomElements } from '../dist/esm/loader';

// storybook
import '../src/stories/color-system.stories.css';

// color system
import '../styles/base.css';

// schemes
import '../styles/schemes/dark.css';
// import '../styles/schemes/light.css';

// themes
import '../styles/themes/medsoft.css';

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
