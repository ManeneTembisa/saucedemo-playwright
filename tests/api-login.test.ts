import { request, expect, test } from '@playwright/test';

test('should return 200 from homepage', async () => {
  const context = await request.newContext();
  const response = await context.get('https://www.saucedemo.com/');
  expect(response.status()).toBe(200);
});
