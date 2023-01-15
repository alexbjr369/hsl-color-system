import { html } from 'lit-html';
import { ColorsProduct01 } from '../../global/enums/color.enum';

export default {
  title: 'Color System/Main Colors',
};

const Template = () => {
  return html` ${Object.values(ColorsProduct01).map((color) => html`<med-base .color=${color}>${color}</med-base>`)} `;
};

export const Product01 = Template.bind({});
