import { Component, h, Host, Prop } from '@stencil/core';
import { generateClasses } from '../../global/utilities/color';
import { Colors } from '../../interface';

@Component({
  tag: 'med-base',
  styleUrl: 'med-base.scss',
  shadow: true,
})
export class MedBase {
  /**
   * Defines the component color.
   */
  @Prop({ reflect: true }) color?: Colors;

  render() {
    const { color } = this;

    return (
      <Host class={generateClasses(color, { 'med-base': true })}>
        <slot></slot>
      </Host>
    );
  }
}
