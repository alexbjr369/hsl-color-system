import { newSpecPage } from '@stencil/core/testing';
import { MedBase } from '../med-base';

describe('med-base', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedBase],
      html: `<med-base></med-base>`,
    });
    expect(page.root).toEqualHtml(`
      <med-base>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-base>
    `);
  });
});
