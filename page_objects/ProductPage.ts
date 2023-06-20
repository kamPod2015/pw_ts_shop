import { expect, Locator, Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly homeButton: Locator;
  readonly addToCartButton: Locator;
  readonly productName: Locator;
  readonly productPrice: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homeButton = page.getByRole('link', { name: 'Home' });
    this.addToCartButton = page.locator('.cart');
    this.productName = page.locator('#product_details').locator('.productname');
    this.productPrice = page.locator('.productfilneprice');
  }

  async ClickHomeButton() {
    await this.homeButton.click();
    await expect(this.page).toHaveURL(/automationteststore.com/);
  }

  async AddToCart() {
    await this.addToCartButton.click();
    await expect(this.page).toHaveURL('/index.php?rt=checkout/cart');
  }
}
