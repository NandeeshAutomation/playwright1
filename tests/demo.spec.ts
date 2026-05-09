import {Locator, test} from '@playwright/test'

test("modeile recharge",async ({page}) =>{

    // await page.goto("https://www.jio.com/mobile/")

    // await page.waitForTimeout(3000);

    // await page.locator("//div[@class='css-195nmf8']").nth(1).waitFor({state:'visible'})

    // let prices:Locator[] = await page.locator("//div[@class='css-195nmf8']").all();

    // for(let price of prices)
    // {
    //     console.log(await price.innerText());
        
    // }

    await page.goto("https://www.jio.com/jiohome/");
    await page.waitForTimeout(2000)
   let anchors =  await page.locator("//a").all();

   for(let a of anchors)
   {
     console.log(await a.innerText());
   }

    
    
})