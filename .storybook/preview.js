import { defineCustomElements } from '../dist/esm/loader';

// storybook
import '../src/stories/color-system.stories.css';

// color system
import '../styles/base.css';

// themes
// import '../styles/themes/default.css';

// schemes
// import '../styles/schemes/default.css';
// import '../styles/schemes/dark.css';
// import '../styles/schemes/light.css';

defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    target: 'root',
    onChange: (themeName) => {
      document.querySelector('iframe').contentWindow.document.querySelector('.snipet__value--class').textContent = `${themeName.class.join(' ')}`;
    },
  },
};
