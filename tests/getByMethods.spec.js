import {chromium, test, Locator} from '@playwright/test'

test.setTimeout(30000)

test("getMethods",async({page})=> {
    //await page.goto("https://demo.nopcommerce.com/login"); 
    //await page.getByLabel("Email:").fill("aaa@gmail.com")
    //await page.getByLabel("Email:",{exact:true}).fill("aaa@gmail.com")

    //await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //await page.getByPlaceholder("Username",{exact:true}).fill("Admin");
   // await page.getByPlaceholder("Usernam",{exact:true}).fill("Admin");//error
   // await page.getByPlaceholder("Usernam",{exact:false}).fill("Admin");

   await page.goto("https://www.flipkart.com/");

   await page.waitForLoadState()

   await page.locator("button:has-text('✕')").click();


   const allvalueslocator = await page.locator(".css-146c3p1 r-dnmrzs r-1udh08x r-1udbk01 r-3s2u2q r-1iln25a r-1b1g84l r-tuq35u r-u8s1d r-q4m81j r-1r0gou5");


   
   console.log( allvalueslocator.first().innerText());
  



})