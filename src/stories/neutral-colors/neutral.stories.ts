import { html } from 'lit-html';
import { ColorsNeutral } from '../../global/enums/color.enum';

export default {
  title: 'Color System/Neutral Colors',
};

const Template = () => {
  return html` ${Object.values(ColorsNeutral).map((color) => html`<med-base .color=${color}>${color}</med-base>`)} `;
};

export const Brand = Template.bind({});
