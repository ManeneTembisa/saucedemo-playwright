// src/pages/InventoryPage.ts
import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async isOnInventoryPage(): Promise<boolean> {
    return this.page.url().includes('inventory.html');
  }

  // Select an item (e.g., first product) and add it to the cart
  async selectItemAndAddToCart(): Promise<void> {
    // Assuming that items have a class 'btn_inventory' for the Add to Cart button
    const addToCartButton = await this.page.locator('.btn_inventory').first();
    await addToCartButton.click();
  }

  // Navigate to the cart page
  async goToCart(): Promise<void> {
    const cartButton = await this.page.locator('.shopping_cart_link');
    await cartButton.click();
  }
}
