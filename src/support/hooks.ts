import { Before, After } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { CustomWorld } from './world';

Before({ timeout: 60000 }, async function (this: CustomWorld) {
  this.browser = await chromium.launch({ headless: false });
  this.page = await this.browser.newPage();
});

After(async function (this: CustomWorld) {
  await this.page?.close();
  await this.browser?.close();
});
