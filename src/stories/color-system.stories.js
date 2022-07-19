import { html } from 'lit-html';
import { Colors } from '../global/enums/color.enum';

export default {
  title: 'Medgrupo',
};

const Template = ({color}) => {

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  toggleScheme(prefersDark.matches);

  prefersDark.addListener(mediaQuery => toggleScheme(mediaQuery.matches));

  function toggleScheme(shouldAdd) {
    document.documentElement.setAttribute('color-scheme', `${shouldAdd ? 'dark' : 'light'}`);
  }

  return html`
    <med-base .color=${color}>teste</med-base>
  `;
};

export const ColorSystem = Template.bind({});
ColorSystem.argTypes = {
  color: {
    options: Object.values(Colors),
    control: { type: 'select'},
    description: "Defines the component color.",
    table: {
      type: { summary: Object.values(Colors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
};
