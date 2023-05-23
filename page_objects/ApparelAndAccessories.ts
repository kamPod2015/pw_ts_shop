import { expect, Locator, Page } from "@playwright/test";

export class ApparelAndAccessories {
  readonly page: Page;
  readonly homeButton: Locator;
  readonly shoesSubcategory: Locator;
  readonly tshirtsSubcategory: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homeButton = page.getByRole('link', { name: 'Home' });
    this.shoesSubcategory = page.locator('#maincontainer').getByRole('listitem').filter({ hasText: 'Shoes' });
    this.tshirtsSubcategory = page.locator('#maincontainer').getByRole('listitem').filter({ hasText: 'T-shirts' });
  }

  async ClickHomeButton() {
    await this.homeButton.click();
    await expect(this.page).toHaveURL(/automationteststore.com/);
  }

  async GoToSubcategoryShoes() {
    await this.shoesSubcategory.click();
  }

  async GoToSubcategoryTshirts() {
    await this.tshirtsSubcategory.click();
  }
}