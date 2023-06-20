import { test, expect } from '@playwright/test';
import { MainPage } from '../page_objects/MainPage';
import { ApparelAndAccessories } from '../page_objects/ApparelAndAccessories';
import { Tshirts } from '../page_objects/Tshirts';
import { ProductPage } from '../page_objects/ProductPage';
import { HeaderComponents } from '../components/HeaderComponent';
import { ShoppingCart } from '../page_objects/ShoppingCart';

test.describe('Shopping tests', () => {
  //let - dla dekralacji zmiennych dla całej klasy, dla wszystkich testów np. let loginPAge: LoginPage;
  let mainPage: MainPage;
  let header: HeaderComponents;
  let cartPage: ShoppingCart;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    mainPage = new MainPage(page);
    header = new HeaderComponents(page);
    cartPage = new ShoppingCart(page);
  });

  test.only('3 items to buy', async ({ page }) => {
    const apparelAndAccessories = new ApparelAndAccessories(page);
    const productPage = new ProductPage(page);
    const tshirtName = 'CASUAL 3/4 SLEEVE BASEBALL T-SHIRT';
    const shoesName = 'RUBY SHOO WOMENS JADA T-BAR';
    const itemFromSearchBox = 'Skinsheen Bronzer Stick';

    //await mainPage.GoTo();
    //koszula
    await mainPage.GoToApparelAndAccessories();
    await apparelAndAccessories.GoToSubcategoryTshirts();
    await page.getByRole('link').getByText(tshirtName).click();
    const tshirtPrice = await productPage.productPrice.textContent();
    await productPage.AddToCart();
    await expect(header.CartItems).toContainText('1');
    //buty
    await mainPage.GoToApparelAndAccessories();
    await apparelAndAccessories.GoToSubcategoryShoes();
    await page.getByRole('link').getByText(shoesName).click();
    const shoesPrice = await productPage.productPrice.textContent();
    await productPage.AddToCart();
    await expect(header.CartItems).toContainText('2');
    //kosmetyk
    await header.SearchInHeaderAndSelect(itemFromSearchBox);
    await expect(productPage.productName).toContainText(itemFromSearchBox);
    const cosmeticPrice = await productPage.productPrice.textContent();
    await productPage.AddToCart();
    await expect(header.CartItems).toContainText('3');
    //akcje w koszyku
    await expect(cartPage.subTotalField).toContainText('121.50');
    await cartPage.ClickCartCheckoutButton2();
  });

  // 1 Napisz test dodający koszulkę oraz buty do koszyka (bez użycia wyszukiwarki),
  // następnie przy pomocy wyszukiwarki dodaj jakiś kosmetyk i doprowadź zamówienie do finalizacji :)
  //  - sprawdź czy wszystko poszło OK2 Sprawdź czy dane na ekranie wprowadzania adresu są walidowane
  //   poprawnie w formularzu Sprawdź czy po dodaniu artykułu do koszyka poprawnie zmienia się ilość
  //    oraz wartość koszyka nad paskiem menu strony

  test('2 items to buy', async ({ page }) => {
    const apparelAndAccessories = new ApparelAndAccessories(page);
    const tshirts = new Tshirts(page);
    const productPage = new ProductPage(page);

    await mainPage.GoTo();
    await mainPage.ClickHomeButton();
    await mainPage.GoToApparelAndAccessories();
    await apparelAndAccessories.GoToSubcategoryTshirts();
    // await tshirts.page
    //   .locator('.grid')
    //   .filter({ hasText: 'T-Shirt' })
    //   //.filter({ hasNotText: 'T-Shirts'})
    //   .filter({ has: page.locator('.productcart') })
    //   .click();
    // await productPage.AddToCart();
  });

  test('1 item to buy', async ({ page }) => {
    const apparelAndAccessories = new ApparelAndAccessories(page);
    const tshirts = new Tshirts(page);
    const productPage = new ProductPage(page);

    await mainPage.GoTo();
    await mainPage.ClickHomeButton();
    await mainPage.GoToApparelAndAccessories();
    await apparelAndAccessories.GoToSubcategoryTshirts();
    // await tshirts.page
    //   .locator('.grid')
    //   .filter({ hasText: 'T-Shirt' })
    //   //.filter({ hasNotText: 'T-Shirts'})
    //   .filter({ has: page.locator('.productcart') })
    //   .click();
    // await productPage.AddToCart();
  });
});
