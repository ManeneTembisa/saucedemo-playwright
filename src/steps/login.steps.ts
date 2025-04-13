import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Given('I am on the SauceDemo login page', async function (this: CustomWorld) {
  await this.page.goto('https://www.saucedemo.com/');
});

When('I enter valid credentials', async function (this: CustomWorld) {
  await this.page.fill('[data-test="username"]', 'standard_user');
  await this.page.fill('[data-test="password"]', 'secret_sauce');
  await this.page.click('[data-test="login-button"]');
});

Then('I should be redirected to the products page', async function (this: CustomWorld) {
  await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(this.page.locator('.inventory_list')).toBeVisible();
});
