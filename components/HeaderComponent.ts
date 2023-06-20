import { expect, Locator, Page } from '@playwright/test';

export class HeaderComponents {
  readonly page: Page;
  readonly CartItems: Locator;
  readonly SearchBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.CartItems = page.getByRole('link').locator('.label');
    this.SearchBox = page.locator('#filter_keyword');
  }

  async SearchInHeaderAndSelect(itemName: string) {
    await this.SearchBox.fill(itemName);
    await this.page.keyboard.press('Enter');
  }
}
