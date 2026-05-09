import {test,expect,Locator} from '@playwright/test'
import { log } from 'node:console';

test("think",async ({page}) => {

    console.log(typeof(page));

    await page.goto("https://demowebshop.tricentis.com/");
    const products : Locator  = await page.locator(".product-title");

    // console.log(await products.first().innerText())
    // console.log(await products.allInnerTexts())

    // console.log(await products.first().textContent())
    // console.log(await products.allTextContents())

   let productarray : Locator[] = await products.all();
   for(let product of productarray)
   {
    //console.log(await product.innerText());
    console.log(await product.textContent());
    
   }


    
})