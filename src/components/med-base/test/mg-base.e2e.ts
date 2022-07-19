import { newE2EPage } from '@stencil/core/testing';

describe('med-base', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-base></med-base>');

    const element = await page.find('med-base');
    expect(element).toHaveClass('hydrated');
  });
});
