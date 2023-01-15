import { newE2EPage } from '@stencil/core/testing';

describe('med-base-2', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-base-2></med-base-2>');

    const element = await page.find('med-base-2');
    expect(element).toHaveClass('hydrated');
  });
});
