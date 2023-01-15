import { html } from 'lit-html';
import { ColorsBrand } from '../global/enums/color.enum';

export default {
  title: 'Color System/Main Colors',
};

const Template = () => {
  return html` ${Object.values(ColorsBrand).map((color) => html`<med-base .color=${color}>${color}</med-base>`)} `;
};

export const Brand = Template.bind({});
