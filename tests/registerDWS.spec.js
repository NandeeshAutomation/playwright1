import {test,expect} from "@playwright/test"

test("RegisterUser",async({page,browserName})=>{

    //open browser and navigate to URL
    await page.goto("https://demowebshop.tricentis.com/");

    console.log("launching browser="+browserName);
    //click on Register Link
    await page.locator(".ico-register").click();

    //Enter Data for Registration
     await page.locator("#gender-male").click();
     await page.locator("#FirstName").fill("Priya");
     await page.locator("#LastName").fill("CK");
     await page.locator("#Email").fill("priya333@gmail.com");
     await page.locator("#Password").fill("nandi@123");
     await page.locator("#ConfirmPassword").fill("nandi@123");
     await page.screenshot({path:"./screenshots/register.png"});
     await page.locator("#register-button").click();

})

test("login-test",async({browser,browserName})=>{

    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://demowebshop.tricentis.com/");
    console.log("Enterd into Website........");
    
    await page.getByText("Log in").click();
    console.log("Clicked on Login Link.....");

    await page.locator(".email").fill("priya333@gmail.com");

    console.log("Enterd Email.....");
    await page.locator(".password").fill("nandi@123");
    console.log("Enterd Password.....");
    await page.locator("//input[@value='Log in' ]").click();
    console.log("Clicked On Login.....");

    console.log("Login successfull.....");
    
})