import { expect, Locator, Page } from "@playwright/test";

export class MainPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly homeButton: Locator;
  readonly apparelAndaccessories: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homeButton = page.getByRole('link', { name: 'Home' });
    this.apparelAndaccessories = page.getByRole('link', { name: 'Apparel & accessories' });
  }

  async GoTo() {
    await this.page.goto("https://automationteststore.com/");
    await expect(this.page).toHaveURL(/automationteststore.com/);
  }

  async ClickHomeButton() {
    await this.homeButton.click();
    await expect(this.page).toHaveURL(/automationteststore.com/);
  }

  async GoToApparelAndAccessories() {
    await this.apparelAndaccessories.click();
  }
}