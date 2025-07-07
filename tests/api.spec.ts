import { test, expect, request } from '@playwright/test';

test('Homepage API health check', async () => {
  const context = await request.newContext();
  const response = await context.get('https://www.saucedemo.com');
  expect(response.status()).toBe(200);
});
