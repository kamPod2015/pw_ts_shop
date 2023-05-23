import { expect, Locator, Page } from "@playwright/test";

export class Tshirts {
  readonly page: Page;
  readonly homeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homeButton = page.getByRole('link', { name: 'Home' });
}

  async ClickHomeButton() {
    await this.homeButton.click();
    await expect(this.page).toHaveURL(/automationteststore.com/);
  }
}