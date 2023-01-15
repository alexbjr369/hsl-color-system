import { html } from 'lit-html';
import { ColorsFeedback } from '../global/enums/color.enum';

export default {
  title: 'Color System/Feedback Colors',
};

const Template = () => {
  return html` ${Object.values(ColorsFeedback).map((color) => html`<med-base .color=${color}>${color}</med-base>`)} `;
};

export const Brand = Template.bind({});
