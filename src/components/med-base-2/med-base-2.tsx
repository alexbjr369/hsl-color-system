import { Component, h, Host, Prop } from '@stencil/core';
import { generateClasses } from '../../global/utilities/color';
import { Colors } from '../../interface';
import { namespace } from '../../global/constants/global.constant';

@Component({
  tag: 'med-base-2',
  styleUrl: 'med-base-2.scss',
  shadow: true,
})
export class MedBase2 {
  /**
   * Defines the component color.
   */
  @Prop({ reflect: true }) color?: Colors;

  render() {
    const { color } = this;

    return (
      <Host class={generateClasses(color, { [`${namespace}-base`]: true })}>
        <slot></slot>
      </Host>
    );
  }
}
