// src/pages/CartPage.ts
import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async isOnCartPage(): Promise<boolean> {
    return this.page.url().includes('cart.html');
  }

  // Ensure the cart has at least one item
  async verifyItemInCart(): Promise<boolean> {
    const cartItem = await this.page.locator('.cart_item');
    return await cartItem.count() > 0;
  }
}
