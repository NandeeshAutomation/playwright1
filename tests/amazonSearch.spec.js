import {test} from '@playwright/test'

test("search test",async({page,browser,browserName}) =>{
    await page.goto("https://www.jiomart.com/sections/low-price-mumbai")
    await page.waitForTimeout(20000)


})