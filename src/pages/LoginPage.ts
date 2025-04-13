// src/pages/LoginPage.ts
import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  // Method to navigate to the login page
  async goto(): Promise<void> {
    await this.page.goto('https://www.saucedemo.com');
  }

  // Login method
  async login(username: string, password: string): Promise<void> {
    await this.page.fill('[data-test="username"]', username);
    await this.page.fill('[data-test="password"]', password);
    await this.page.click('[data-test="login-button"]');
  }
}
