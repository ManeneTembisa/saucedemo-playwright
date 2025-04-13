import { After, Before, Status } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from '@playwright/test';
import { chromium } from 'playwright';

let browser: Browser;
let context: BrowserContext;
let page: Page;

Before(async function () {
  browser = await chromium.launch({ headless: true });
  context = await browser.newContext();
  page = await context.newPage();
  this.page = page;
});

After(async function (scenario) {
  if (scenario.result?.status === Status.FAILED && this.page) {
    const screenshot = await this.page.screenshot({ path: `screenshots/${Date.now()}.png`, fullPage: true });
    await this.attach(screenshot, 'image/png');
  }
  await this.page?.close();
  await context?.close();
  await browser?.close();
});
