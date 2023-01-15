import { newSpecPage } from '@stencil/core/testing';
import { MedBase2 } from '../med-base-2';

describe('med-base-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedBase2],
      html: `<med-base-2></med-base-2>`,
    });
    expect(page.root).toEqualHtml(`
      <med-base-2>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-base-2>
    `);
  });
});
