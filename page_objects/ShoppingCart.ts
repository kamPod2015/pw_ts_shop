import { expect, Locator, Page } from '@playwright/test';

export class ShoppingCart {
  readonly page: Page;
  readonly homeButton: Locator;
  readonly cartCheckoutButton1: Locator;
  readonly subTotalField: Locator;
  readonly cartCheckoutButton2: Locator;

  constructor(page: Page) {
    this.page = page;
    this.subTotalField = page
      .locator('#totals_table')
      .locator('tr')
      .locator('td')
      .nth(1);
    this.cartCheckoutButton2 = page.locator('#cart_checkout2');
  }

  async ClickCartCheckoutButton2() {
    await this.cartCheckoutButton2.click();
  }
}
