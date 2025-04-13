import { setWorldConstructor, IWorldOptions } from '@cucumber/cucumber';
import { Browser, chromium, Page } from 'playwright';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

export class CustomWorld {
  public page!: Page;
  public browser!: Browser;
  public loginPage!: LoginPage;
  public inventoryPage!: InventoryPage;

  constructor(options: IWorldOptions) {}

  async init() {
    this.browser = await chromium.launch({ headless: false });
    const context = await this.browser.newContext();
    this.page = await context.newPage();

    this.loginPage = new LoginPage(this.page);
    this.inventoryPage = new InventoryPage(this.page);
  }
}
