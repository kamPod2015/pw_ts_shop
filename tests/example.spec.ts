import { test, expect } from '@playwright/test';
import { MainPage } from '../page_objects/MainPage';
import { ApparelAndAccessories } from '../page_objects/ApparelAndAccessories';
import { Tshirts } from '../page_objects/Tshirts';
import { ProductPage } from '../page_objects/ProductPage';

test.only('test', async ({ page }) => {
  const mainPage = new MainPage(page);
  const apparelAndAccessories = new ApparelAndAccessories(page);
  const tshirts = new Tshirts(page);
  const productPage = new ProductPage(page);

  await mainPage.GoTo();
  await mainPage.ClickHomeButton();
  await mainPage.GoToApparelAndAccessories();
  await apparelAndAccessories.GoToSubcategoryTshirts();
  await tshirts.page.locator('.grid').getByText('T-SHIRT', { exact: true }).first().click();
  await productPage.AddToCart();

});


// 1 Napisz test dodający koszulkę oraz buty do koszyka (bez użycia wyszukiwarki), 
// następnie przy pomocy wyszukiwarki dodaj jakiś kosmetyk i doprowadź zamówienie do finalizacji :)
//  - sprawdź czy wszystko poszło OK2 Sprawdź czy dane na ekranie wprowadzania adresu są walidowane
//   poprawnie w formularzu Sprawdź czy po dodaniu artykułu do koszyka poprawnie zmienia się ilość
//    oraz wartość koszyka nad paskiem menu strony 