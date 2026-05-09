import {test} from "@playwright/test"

test("login-test",async({browser,browserName})=>{

    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://demowebshop.tricentis.com/");
    await page.getByText("Log in").click();
    await page.locator(".email").fill("priya@gmail.com");
    await page.locator(".password").fill("nandi@123");
    await page.locator("//input[@value='Log in' ]").click();
})