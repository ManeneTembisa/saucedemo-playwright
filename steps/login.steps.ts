import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Page, BrowserContext, Browser } from 'playwright';
import { LoginPage } from '../pages/LoginPage';
import { expect } from '@playwright/test';

let browser: Browser;
let context: BrowserContext;
let page: Page;
let loginPage: LoginPage;

Given('I open the login page', async () => {
  browser = await chromium.launch({ headless: true });
  context = await browser.newContext();
  page = await context.newPage();
  loginPage = new LoginPage(page);
  await loginPage.navigate();
});

When('I login with username {string} and password {string}', async (username: string, password: string) => {
  await loginPage.login(username, password);
});

Then('I should see the inventory page', async () => {
  expect(await loginPage.isOnInventoryPage()).toBeTruthy();
  await browser.close();
});
