import { expect, test } from '@playwright/test';

test('title test', async ({ page }) => {
  await page.goto('https://example.com/');
  const title = await page.title();
  await expect(title).toBe('Example Domain');
});
