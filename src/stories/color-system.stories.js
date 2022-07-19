import { html } from 'lit-html';
import { Colors } from '../global/enums/color.enum';

export default {
  title: 'Medgrupo',
};

const Template = ({color}) => {
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
