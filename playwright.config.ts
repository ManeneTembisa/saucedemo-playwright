import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 30000,
  retries: 1,
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on',
    video: 'retain-on-failure'
  },
  projects: [
  {
    name: 'Chromium',
    use: { browserName: 'chromium', headless: true }
  },
  {
    name: 'Firefox',
    use: { browserName: 'firefox', headless: true }
  },
  {
    name: 'WebKit',
    use: { browserName: 'webkit', headless: true }
  }
]
});
