import { Component, h, Host, Prop } from '@stencil/core';
import { Color } from '../../interface';
import { generateClasses } from '../../global/utilities/color';

@Component({
  tag: 'med-base',
  styleUrl: 'med-base.scss',
  shadow: true,
})
export class MedBase {
  /**
   * Defines the component color.
   */
  @Prop({ reflect: true }) color?: Color;

  render() {
    const { color } = this;

    return (
      <Host class={generateClasses(color, { 'med-base': true })}>
        <slot></slot>
      </Host>
    );
  }
}
